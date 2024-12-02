from pathlib import Path

import pytest
from lxml import etree
from sphinx.errors import ExtensionError

from sphinx_nefertiti import get_html_theme_path
from sphinx_nefertiti.colorsets import all_colorsets
from sphinx_nefertiti.exceptions import SphinxNefertitiError
from sphinx_nefertiti.fonts import extra_fonts, web_safe_fonts


# ---------------------------------------------------------------------
@pytest.mark.parametrize(
    "config, expected",
    [
        (  # 'style'
            {"html_theme_options": {"style": "unknown"}},
            "Style 'hl(unknown)' is not known as a color set.",
        ),
        (  # 'pygments_light_style'
            {
                "html_theme_options": {
                    "pygments_light_style": "an_unknown_light_style"
                }
            },
            (
                "Failed to find Pygments style 'an_unknown_light_style' "
                "for theme option 'pygments_light_style'."
            ),
        ),
        (  # 'pygments_dark_style'
            {
                "html_theme_options": {
                    "pygments_dark_style": "an_unknown_dark_style"
                }
            },
            (
                "Failed to find Pygments style 'an_unknown_dark_style' "
                "for theme option 'pygments_dark_style'."
            ),
        ),
        (  # 'sans_serif_font'
            {
                "html_theme_options": {
                    "sans_serif_font": "an_unknown_sans_font"
                },
            },
            (
                "Font 'an_unknown_sans_font' could not be found."
                f"\n Available fonts: {', '.join(extra_fonts)}. "
                f"\n Web safe fonts: {', '.join(web_safe_fonts)}."
            ),
        ),
        (  # 'monospace_font'
            {
                "html_theme_options": {
                    "monospace_font": "an_unknown_monospace_font"
                },
            },
            (
                "Font 'an_unknown_monospace_font' could not be found."
                f"\n Available fonts: {', '.join(extra_fonts)}. "
                f"\n Web safe fonts: {', '.join(web_safe_fonts)}."
            ),
        ),
        (  # 'project_name_font'
            {
                "html_theme_options": {
                    "project_name_font": "an_unknown_project_name_font"
                },
            },
            (
                "Font 'an_unknown_project_name_font' could not be found."
                f"\n Available fonts: {', '.join(extra_fonts)}. "
                f"\n Web safe fonts: {', '.join(web_safe_fonts)}."
            ),
        ),
        (  # 'documentation_font'
            {
                "html_theme_options": {
                    "documentation_font": "an_unknown_documentation_font"
                },
            },
            (
                "Font 'an_unknown_documentation_font' could not be found."
                f"\n Available fonts: {', '.join(extra_fonts)}. "
                f"\n Web safe fonts: {', '.join(web_safe_fonts)}."
            ),
        ),
        (  # 'doc_headers_font'
            {
                "html_theme_options": {
                    "doc_headers_font": "an_unknown_doc_headers_font"
                },
            },
            (
                "Font 'an_unknown_doc_headers_font' could not be found."
                f"\n Available fonts: {', '.join(extra_fonts)}. "
                f"\n Web safe fonts: {', '.join(web_safe_fonts)}."
            ),
        ),
        (  # 'header_links' test 1.
            {
                "html_theme_options": {
                    "header_links": [{}],
                },
            },
            (
                "Items in the 'header_links' option, in the "
                "'html_theme_options', must contain a 'text' and a 'link' "
                "keys or a 'text' and a 'dropdown' keys:\n\t{}\n"
            ),
        ),
        (  # 'header_links' test 2.
            {
                "html_theme_options": {
                    "header_links": [
                        {"text": "A link", "link": "samelink"},
                        {"text": "Anoter link", "link": "samelink"},
                    ],
                },
            },
            (
                "URL 'samelink' appears more than once in the option "
                "'header_links' in the 'html_theme_options'.\n"
            ),
        ),
        (  # 'header_links' test 3.
            {
                "html_theme_options": {
                    "header_links": [
                        {"dropdown": ({"text": "A", "link": "A"},)},
                    ],
                },
            },
            (
                "Option 'header_links' in 'html_theme_options' contains an "
                "item 'dropdown' that has no 'text':\n\t"
                "{'dropdown': ({'text': 'A', 'link': 'A'},)}\n"
            ),
        ),
        (  # 'header_links' test 4.
            {
                "html_theme_options": {
                    "header_links": [
                        {"dropdown": {"not_a_list"}},
                    ],
                },
            },
            (
                "Option 'header_links' in 'html_theme_options' contains an "
                "item 'dropdown' that is not a list nor a tuple.\n"
            ),
        ),
        (  # 'header_links' test 5 (_validate_match).
            {
                "html_theme_options": {
                    "header_links": [
                        {"text": "A", "link": "A/B", "match": {}},
                    ],
                },
            },
            (
                "Option 'header_links' in 'html_theme_options' contains an "
                "item 'match' that is neither a list, a tuple or a string:"
                "\n\t{'text': 'A', 'link': 'A/B', 'match': {}}\n"
            ),
        ),
        (  # 'header_links' test 6 (_validate_match).
            {
                "html_theme_options": {
                    "header_links": [
                        {"text": "A", "link": "/A", "match": r"^[\w]+$"},
                        {"text": "B", "link": "/B", "match": r"^[\w]+$"},
                    ],
                },
            },
            (
                r"The regexp '^[\w]+$' appears more than once in the option "
                "'header_links' in the 'html_theme_options'.\n"
            ),
        ),
        (  # 'header_links' test 7 (_validate_dropdown).
            {
                "html_theme_options": {
                    "header_links": [
                        {"text": "A", "link": "A/B", "match": r"^[\A\_]+$"},
                        {
                            "text": "B",
                            "link": "B/C",
                            "dropdown": ({"text": "C", "link": "C"},),
                            "match": r"^[\A\_]+$",
                        },
                    ],
                },
            },
            (
                r"The regexp '^[\A\_]+$' appears more than once in the "
                "option 'header_links' in the 'html_theme_options'.\n"
            ),
        ),
        (  # 'header_links' test 8 (_validate_dropdown).
            {
                "html_theme_options": {
                    "header_links": [
                        {
                            "text": "A",
                            "link": "A/B",
                            "dropdown": (
                                {"text": "item_A", "link": "/item_a"},
                                {"t": "item_B", "l": "/item_b"},
                            ),
                        },
                    ],
                },
            },
            (
                "Dropdown items in the 'header_links' option, in "
                "'html_theme_options', must contain a 'text' and a 'link' "
                "keys, or a 'divider' key:\n"
                "\t{'t': 'item_B', 'l': '/item_b'}\n"
            ),
        ),
        (  # 'header_links' test 9 (_validate_dropdown).
            {
                "html_theme_options": {
                    "header_links": [
                        {
                            "text": "A",
                            "link": "A/B",
                            "dropdown": (
                                {"text": "item_A", "link": "/item_a"},
                                {"divider": False},
                                {"text": "item_B", "link": "/item_b"},
                            ),
                        },
                    ],
                },
            },
            (
                "Dropdown in the 'header_links' option contains a 'divider' "
                "entry with a False value. Either remove it or make it True:"
                "\n\t{'divider': False}\n"
            ),
        ),
        (  # 'header_links' test 10 (_validate_dropdown).
            {
                "html_theme_options": {
                    "header_links": [
                        {
                            "text": "A",
                            "link": "A/B",
                            "dropdown": (
                                {"text": ["item_A"], "link": "/item_a"},
                            ),
                        },
                    ],
                },
            },
            (
                "A dropdown item in the 'header_links' option, in the "
                "'html_theme_options', has a non-string 'text':\n"
                "\t{'text': ['item_A'], 'link': '/item_a'}\n"
            ),
        ),
        (  # 'header_links' test 11 (_validate_dropdown).
            {
                "html_theme_options": {
                    "header_links": [
                        {
                            "text": "A",
                            "link": "A/B",
                            "dropdown": (
                                {"text": "item_A", "link": ["/item_a"]},
                            ),
                        },
                    ],
                },
            },
            (
                "A dropdown item in the 'header_links' option, in the "
                "'html_theme_options', has a non-string 'link':\n"
                "\t{'text': 'item_A', 'link': ['/item_a']}\n"
            ),
        ),
        (  # 'header_links' test 12 (_validate_dropdown).
            {
                "html_theme_options": {
                    "header_links": [
                        {
                            "text": "A",
                            "link": "A/B",
                            "dropdown": (
                                {"text": "item_A", "link": "/item_a"},
                                {"text": "item_B", "link": "/item_a"},
                            ),
                        },
                    ],
                },
            },
            (
                "URL '/item_a' appears more than once in the option "
                "'header_links' in the 'html_theme_options':\n"
                "\t{'text': 'item_B', 'link': '/item_a'}\n"
            ),
        ),
        (  # 'footer_links' test 1.
            {
                "html_theme_options": {"footer_links": {}},
            },
            (
                "The 'footer_links' option, in the 'html_theme_options', "
                "must be a list of dictionaries, however it is a dict:\n"
                "\t{}\n"
            ),
        ),
        (  # 'footer_links' test 2.
            {
                "html_theme_options": {"footer_links": ["Entry 1", "Entry 2"]},
            },
            (
                "Items 'footer_links' option, in the 'html_theme_options', "
                "must be dictionaries, however it is a str:\n"
                "\tEntry 1\n"
            ),
        ),
        (  # 'footer_links' test 3.
            {
                "html_theme_options": {
                    "footer_links": [
                        {"t": "a", "l": "/a"},
                    ]
                },
            },
            (
                "Items in the 'footer_links' option, in the "
                "'html_theme_options', must contain a 'text' and "
                "a 'link' keys:\n\t{'t': 'a', 'l': '/a'}\n"
            ),
        ),
        (  # 'footer_links' test 4.
            {
                "html_theme_options": {
                    "footer_links": [
                        {"text": "A", "link": "/a"},
                        {"text": "B", "link": "/a"},
                    ]
                },
            },
            (
                "URL '/a' appears more than once in the option "
                "'footer_links' in the 'html_theme_options'.\n"
            ),
        ),
    ],
)
def test_prj1_fails_to_build(config, expected, test_app):
    """
    Test that the project fails to build because of wrong settings.
    """
    with pytest.raises(ExtensionError) as excinfo:
        test_app(
            buildername="html", srcdir="sample_prj_1", confoverrides=config
        )

    assert isinstance(excinfo.value.orig_exc, SphinxNefertitiError)
    assert excinfo.value.orig_exc.args[0] == str(SphinxNefertitiError(expected))


def test_get_html_theme_path():
    theme_path = str(Path(__file__).parents[1].absolute())
    assert get_html_theme_path() == theme_path


# ---------------------------------------------------------------------
# Sample Project 2 tests.


def test_prj2_show_colorset_choices(test_app):
    """
    Test show_colorset_choices.

    Check that enabling show_colorset_choices copies all the colorsets to
    the static output directory, copies the ``colorsets.js`` file, and
    displays the colorset selector in the header.
    """
    sample_prj2 = test_app(
        buildername="html",
        srcdir="sample_prj_2",
        confoverrides={
            "html_theme_options": {
                "style": "blue",
                "show_colorset_choices": True,
            }
        },
    )

    # Check that all colorset CSS bundles are copied to the _static dir.
    outdir = Path(sample_prj2.outdir)
    for colorset in all_colorsets:
        cs_file = outdir / "_static" / f"sphinx-nefertiti-{colorset}.min.css"
        assert cs_file.exists()

    # Check that ``colorsets.js`` file (allows the user to switch between
    # colorsets using the selector in the header) is also in the _static dir.
    colorset_js = outdir / "_static" / "colorsets.js"
    assert colorset_js.exists()

    # Check that the widget is part of the index.html.
    content = Path(sample_prj2.outdir, "index.html").read_text()
    html = etree.HTML(content)

    # Get the anchor that holds the id='snftt-color'.
    # It represents the dropdown for the colorsets in the header.
    widgets = html.xpath("//a[@id='snftt-color']")
    assert len(widgets) == 1

    # Get the next sibling, which is the <UL> with all the colorsets.
    ul_list = widgets[0].getnext()

    # Each colorset text is represented inside the ul_list as a span
    # with the class 'ms-3'. So fetch them from the ul_list and
    # verify that each element matches each entry in all_colorsets.
    spans = ul_list.xpath('.//span[@class="ms-3"]')
    expected_number_of_colorsets = 10 + 1  # 10 colorset + the neutral option.
    assert len(spans) == expected_number_of_colorsets
    for index, colorset in enumerate(all_colorsets):
        if colorset == "default":
            assert spans[index].text == "Cyan"
        else:
            assert spans[index].text == colorset.capitalize()


def test_prj2_style_blue_loads_blue_colorset(test_app):
    """Test that passing ``{'style': 'blue'}`` loads the blue colorset."""
    sample_prj2 = test_app(
        buildername="html",
        srcdir="sample_prj_2",
        confoverrides={
            "html_theme_options": {
                "style": "blue",
            }
        },
    )
    content = Path(sample_prj2.outdir, "index.html").read_text()
    html = etree.HTML(content)
    head_links = html.xpath("//link")

    # Set to True when finding a href attribute with a value
    # that starts with _static/sphinx-nefertiti-blue.min.css.
    found = False
    colorset = "_static/sphinx-nefertiti-blue.min.css?v="

    for link in head_links:
        if "href" in link.attrib and link.attrib["href"].startswith(colorset):
            found = True
            break

    assert found is True


def test_prj2_current_version_and_versions(test_app):
    """
    Test ``current_version`` and ``versions`` key in ``html_theme_options``.

    Check that module ``docsver.py`` works as expected.
    There should be a file ``docs-versions.js`` in ``_build/html/_static``
    with tuples representing the versions of the docs.
    """
    sample_prj2 = test_app(
        buildername="html",
        srcdir="sample_prj_2",
        confoverrides={
            "html_theme_options": {
                "current_version": "2.0.5",
                "versions": [
                    ("0.9.9", "https://sphinx-nefertiti/0.9.9"),
                    ("1.0.5", "https://sphinx-nefertiti/1.0.5"),
                    ("1.1.8", "https://sphinx-nefertiti/1.1.8"),
                    ("2.0.5", "localhost:7998/"),
                ],
            }
        },
    )

    outdir = Path(sample_prj2.outdir)

    # Check that ``colorsets.js`` file (allows the user to switch between
    # colorsets using the selector in the header) is also in the _static dir.
    docs_versions_js = outdir / "_static" / "docs-versions.js"
    assert docs_versions_js.exists()

    expected = (
        "window.docs_versions = ["
        '{"name": "0.9.9", "url": "https://sphinx-nefertiti/0.9.9"}, '
        '{"name": "1.0.5", "url": "https://sphinx-nefertiti/1.0.5"}, '
        '{"name": "1.1.8", "url": "https://sphinx-nefertiti/1.1.8"}, '
        '{"name": "2.0.5", "url": "localhost:7998/"}'
        "];\nwindow.def_ver = '2.0.5';"
    )
    f = docs_versions_js.open()
    content = f.read()

    assert expected.strip() == content


# ---------------------------------------------------------------------
def test_prj3_add_font_noto_sans(test_app):
    """
    Adds external font **Noto Sans** and use it as ``documentation_font``.

    Check that adding an external font works as expected. So font files are
    added to _build/html/_static directory. And corresponding link file
    is added to load the font.
    """
    sample_prj3 = test_app(buildername="html", srcdir="sample_prj_3")
    outdir = Path(sample_prj3.outdir)

    # Check that the ``fonts/noto-sans`` directory has been copied to
    # the (app.outdir / _static) directory.
    fonts_dir = outdir / "_static" / "fonts"
    assert fonts_dir.exists()

    content = Path(sample_prj3.outdir, "index.html").read_text()
    html = etree.HTML(content)
    stylesheets = html.xpath("//link[@rel='stylesheet']")

    expected_number_of_stylesheets = 8
    assert len(stylesheets) == expected_number_of_stylesheets
    expected_font_stylesheets = [
        "nunito/stylesheet.css",
        "red-hat-mono/stylesheet.css",
        "noto-sans/stylesheet.css",
    ]
    for font_stylesheet in expected_font_stylesheets:
        expected_href = f"_static/fonts/{font_stylesheet}?v="
        found = False
        for stylesheet in stylesheets:
            if stylesheet.attrib["href"].startswith(expected_href):
                found = True
                break
        assert found is True, f"Couldn't find {expected_href}"
        assert (
            fonts_dir / font_stylesheet
        ).exists(), f"File {font_stylesheet} does not exist in {fonts_dir}"


def test_prj3_has_header_links(test_app):
    """Adds header_links and checks that each header link is added."""
    sample_prj3 = test_app(buildername="html", srcdir="sample_prj_3")

    # Test that both, .nftt-header-links-large and .nftt-header-links-small
    # exist in the HTML page.
    content = Path(sample_prj3.outdir, "index.html").read_text()
    html = etree.HTML(content)

    lg_elem = html.xpath("//ul[@class='nftt-header-links-large navbar-nav']")
    sm_elem = html.xpath("//div[@class='nftt-header-links-small']")

    assert lg_elem[0] is not None, "Couldn't find .nftt-header-links-large"
    assert sm_elem[0] is not None, "Couldn't find .nftt-header-links-small"

    number_of_nav_items_in_header_links = 4
    nav_items_in_lg = lg_elem[0].xpath('.//li[@class="nav-item"]')
    nav_items_in_sm = sm_elem[0].xpath('.//li[@class="nav-item"]')
    assert len(nav_items_in_lg) == number_of_nav_items_in_header_links
    assert len(nav_items_in_sm) == number_of_nav_items_in_header_links

    number_of_dropdowns_in_header_links = 1
    dropdowns_in_lg = lg_elem[0].xpath('.//li[@class="nav-item dropdown"]')
    dropdowns_in_sm = sm_elem[0].xpath('.//li[@class="nav-item dropdown"]')
    assert len(dropdowns_in_lg) == number_of_dropdowns_in_header_links
    assert len(dropdowns_in_sm) == number_of_dropdowns_in_header_links


def test_prj3_has_footer_links(test_app):
    """Adds footer_links, and checks that each footer link is added."""
    sample_prj3 = test_app(buildername="html", srcdir="sample_prj_3")

    # Test that both, .nftt-header-links-large and .nftt-header-links-small
    # exist in the HTML page.
    content = Path(sample_prj3.outdir, "index.html").read_text()
    html = etree.HTML(content)

    fl_elem = html.xpath("//ul[@id='nftt-footer-links']")

    assert fl_elem[0] is not None, "Couldn't find .nftt-footer-links"

    number_of_nav_items_in_footer_links = 4
    nav_items = fl_elem[0].xpath('.//a[@class="list-item"]')
    assert len(nav_items) == number_of_nav_items_in_footer_links
