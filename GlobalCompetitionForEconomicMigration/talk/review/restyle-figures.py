# /// script
# requires-python = ">=3.13"
# dependencies = ["matplotlib>=3.10", "seaborn>=0.13", "polars>=1.38"]
# ///
"""Re-render retained figures with presentation-only typography and annotations."""

from __future__ import annotations

import argparse
import hashlib
import importlib
import json
import re
import shutil
import sys
import textwrap
from pathlib import Path
from typing import Any

import matplotlib
import numpy as np

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap
from matplotlib.text import Text
from matplotlib.ticker import FuncFormatter


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source", type=Path, required=True, help="Retained visa_proj worktree"
    )
    args = parser.parse_args()
    source = args.source.resolve()
    talk = Path(__file__).resolve().parents[1]
    figures = talk / "figures"
    review = talk / "review"
    numbers = review / "figure-data-check"
    numbers.mkdir(exist_ok=True)
    manifest = json.loads((talk / "figure-manifest.json").read_text())
    selected = {Path(row["source_file"]).stem: row for row in manifest["figures"]}
    sys.path.insert(0, str(source / "scripts/research"))
    modules: dict[str, Any] = {
        short: importlib.import_module(f"stylized_facts_{name}")
        for short, name in {
            "base": "figures",
            "second": "second_batch",
            "third": "third_batch",
            "joint": "joint_sources",
            "annual": "annual_sponsorship",
            "outline": "outline_figures",
            "matrices": "transition_matrices",
        }.items()
    }
    metadata: dict[str, object] = {}
    rendered: set[str] = set()

    def clean(text: str) -> str:
        text = re.sub(r"\s*\[N=[\d,]+\]", "", text)
        return re.sub(r"\s*\([^)]*destinations;[^)]*routes\)", "", text)

    def save(figure: plt.Figure, name: str) -> None:
        if name not in selected:
            # Matrix producers reuse a figure for full, wide and plot-only views.
            return
        row = selected[name]
        data_axes = [
            axis for axis in figure.axes if axis.get_ylabel() != "Comparable cells"
        ]

        def data_signature() -> str:
            values = [
                {
                    "lines": [
                        np.asarray(line.get_xydata()).tolist() for line in axis.lines
                    ],
                    "images": [
                        np.asarray(image.get_array()).tolist() for image in axis.images
                    ],
                    "offsets": [
                        np.asarray(collection.get_offsets()).tolist()
                        for collection in axis.collections
                    ],
                    "limits": [axis.get_xlim(), axis.get_ylim()],
                }
                for axis in data_axes
            ]
            return hashlib.sha256(
                json.dumps(values, sort_keys=True).encode()
            ).hexdigest()

        before_data = data_signature()
        annotations = [
            text.get_text() for text in figure.findobj(Text) if text.get_text()
        ]
        # Figure-level titles and footers duplicate the host slide and its notes.
        for text in list(figure.texts):
            text.remove()
        if name == "joint-applicant-fee-soc15":
            figure.axes[1].remove()  # Comparable-cell counts are sample support.
            axis = figure.axes[0]
            axis.set_position((0.13, 0.18, 0.82, 0.74))
            axis.tick_params(labelbottom=True)
            axis.set_xlabel("Year")
        large_matrix = "international-soc2-" in name
        floor = 14 if large_matrix else 22
        if name.startswith("international-"):
            figure.axes[0].text(
                -0.02,
                1.01,
                "Origin group",
                transform=figure.axes[0].transAxes,
                ha="right",
                va="bottom",
                fontsize=17 if large_matrix else 22,
            )
        for axis in figure.axes:
            for dimension in (axis.xaxis, axis.yaxis):
                if any(
                    clean(label.get_text()) != label.get_text()
                    for label in dimension.get_ticklabels()
                ):
                    original = dimension.get_major_formatter()
                    dimension.set_major_formatter(
                        FuncFormatter(
                            lambda value, pos, fmt=original: clean(fmt(value, pos))
                        )
                    )
            for text in list(axis.texts):
                value = text.get_text()
                if (
                    name == "occupation-switching-corrected-2010-2025"
                    and "known-code events" in value
                ):
                    text.remove()
                elif name == "corrected-one-year-endpoint-2010":
                    text.set_text(re.sub(r"\s*\([\d,]+\)", "", value))
            for text in axis.findobj(Text):
                text.set_text(clean(text.get_text()))
                text.set_fontsize(max(floor, float(text.get_fontsize()) * 1.30))
            if axis.images:
                if not large_matrix and len(axis.get_xticks()) >= 7:
                    labels = [
                        textwrap.fill(
                            label.get_text().replace("\n", " "),
                            width=9,
                            break_long_words=False,
                        )
                        for label in axis.get_xticklabels()
                    ]
                    axis.set_xticks(axis.get_xticks(), labels, fontsize=20)
                image = axis.images[0]
                values = image.get_array()
                if values is None:
                    raise ValueError(f"Missing matrix data: {name}")
                for text in axis.texts:
                    x, y = text.get_position()
                    if float(x).is_integer() and float(y).is_integer():
                        red, green, blue, _ = image.to_rgba(values[int(y), int(x)])
                        lightness = 0.2126 * red + 0.7152 * green + 0.0722 * blue
                        text.set_color("white" if lightness < 0.48 else "#222222")
        # Preserve every original data artist and numerical axis limit. Only
        # text, a sample-support subplot and colour presentation are changed.
        target = talk / row["file"]
        if data_signature() != before_data:
            raise ValueError(f"Data artists or limits changed: {name}")
        plt.rcParams["svg.fonttype"] = "none"
        figure.savefig(target, facecolor="white", bbox_inches="tight", pad_inches=0.18)
        figure.savefig(
            review / f"{target.stem}-graph.png",
            dpi=150,
            facecolor="white",
            bbox_inches="tight",
            pad_inches=0.18,
        )
        target.write_text(
            "\n".join(line.rstrip() for line in target.read_text().splitlines()) + "\n"
        )
        row["sha256"] = hashlib.sha256(target.read_bytes()).hexdigest()
        row["presentation_transform"] = "review/restyle-figures.py"
        metadata[target.name] = {
            "source_figure": row["source_file"],
            "original_annotations": annotations,
        }
        rendered.add(name)
        if not name.startswith("international-"):
            plt.close(figure)

    for module in modules.values():
        module.save = save
        module.OUT = figures
        module.REVIEW = review
        module.NUMBERS = numbers
    base = modules["base"]
    base.setup()
    plt.rcParams["svg.fonttype"] = "none"
    # Exact six chromatic Paul Tol Vibrant colours used by slides.scss.
    modules["outline"].COLORS = (
        "#0077BB",
        "#EE7733",
        "#009988",
        "#CC3311",
        "#EE3377",
        "#33BBEE",
    )
    # Magnitudes need a sequential scale, not six unordered categorical bands.
    modules["matrices"].CMAP = LinearSegmentedColormap.from_list(
        "vibrant_blue_magnitude", ["#FFFFFF", "#33BBEE", "#0077BB"]
    )
    base.turnover()
    base.fx_coverage()
    for function in ("countries", "unresolved", "gravity_money"):
        getattr(modules["second"], function)()
    third = modules["third"]
    third.rights("spouse")
    third.rights("dependants")
    for function in (
        "gaps",
        "education_requirements",
        "sponsorship_weighting",
        "corrected_endpoint_2010",
    ):
        getattr(third, function)()
    modules["joint"].joint_fees()
    modules["annual"].annual(modules["annual"].readback(), "undergraduate")
    modules["outline"].menu_figures()
    modules["outline"].switching()
    modules["matrices"].main()
    if rendered != set(selected):
        raise ValueError(f"Figure coverage differs: missing {set(selected) - rendered}")
    # Generated numerical readbacks must exactly match their retained originals.
    for generated in numbers.glob("*.csv"):
        original = source / "results/figurebook/data" / generated.name
        if not original.exists() or original.read_bytes() != generated.read_bytes():
            raise ValueError(f"Numerical readback changed: {generated.name}")
    (review / "figure-annotations.json").write_text(
        json.dumps(metadata, ensure_ascii=False, indent=2) + "\n"
    )
    (talk / "figure-manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    shutil.rmtree(numbers)
    plt.close("all")
    print(f"Rendered {len(rendered)} figures; all numerical readbacks unchanged")


if __name__ == "__main__":
    main()
