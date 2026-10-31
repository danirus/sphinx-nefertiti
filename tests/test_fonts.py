from pathlib import Path

import pytest

from sphinx_nefertiti.fonts import fonts_path

FONTS = {
    "assistant": "Assistant",
    "comme": "Comme",
    "exo": "Exo",
    "fira-code": "Fira Code",
    "montserrat": "Montserrat",
    "mulish": "Mulish",
    "nunito": "Nunito",
    "open-sans": "Open Sans",
    "red-hat-display": "Red Hat Display",
    "red-hat-mono": "Red Hat Mono",
    "sofia-sans": "Sofia Sans",
    "ubuntu-sans": "Ubuntu Sans",
    "ubuntu-sans-mono": "Ubuntu Sans Mono",
    "varta": "Varta",
    "work-sans": "Work Sans",
}


@pytest.mark.parametrize("slug", sorted(FONTS))
def test_bundled_font_assets_are_copied_to_html(slug, test_app):
    app = test_app(
        buildername="html",
        srcdir="sample_prj_1",
        confoverrides={
            "html_theme_options": {
                "documentation_font": FONTS[slug],
            },
        },
    )
    assert app.statuscode == 0
    source = fonts_path / slug
    destination = Path(app.outdir) / "_static" / "fonts" / slug
    for path in source.iterdir():
        if path.is_file():
            assert (destination / path.name).read_bytes() == path.read_bytes()
    html = (Path(app.outdir) / "index.html").read_text()
    assert f"_static/fonts/{slug}/stylesheet.css?v=" in html
