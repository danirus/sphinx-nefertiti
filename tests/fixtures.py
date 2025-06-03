import shutil
import sys
from collections.abc import Generator
from io import StringIO
from pathlib import Path
from typing import Any

import pytest
from sphinx.testing.util import SphinxTestApp


def copy_srcdir_to_tmpdir(srcdir, tmp):
    srcdir = Path(__file__).parent.resolve() / srcdir
    tmproot = tmp / Path(srcdir).name
    shutil.copytree(srcdir, tmproot, dirs_exist_ok=True)
    return tmproot


# Copied and slightly modified from `sphinx.testing.fixtures`.
@pytest.fixture
def do_app() -> Generator:
    """
    Provides make_app function to initialize SphinxTestApp instance.
    if you want to initialize 'app' in your test function. please use this
    instead of using SphinxTestApp class directory.
    """
    apps = []
    syspath = sys.path[:]

    def make(*args, **kwargs):
        status, warning = StringIO(), StringIO()
        kwargs.setdefault("status", status)
        kwargs.setdefault("warning", warning)
        app_: Any = SphinxTestApp(*args, **kwargs)
        apps.append(app_)
        return app_

    yield make

    sys.path[:] = syspath
    for app_ in reversed(apps):  # clean up applications from the new ones
        app_.cleanup()


@pytest.fixture
def test_app(do_app, sphinx_test_tempdir) -> Generator:
    test_tmp_dirs = ["_build", "_static", "_templates"]

    def _test_app(**builder_params):
        # Copy test srcdir to test temporary directory sphinx_test_tempdir.
        src_dir = copy_srcdir_to_tmpdir(
            builder_params["srcdir"], sphinx_test_tempdir
        )

        _app = do_app(
            srcdir=src_dir,
            buildername=builder_params.get("buildername", "html"),
            freshenv=builder_params.get("freshenv"),
            confoverrides=builder_params.get("confoverrides"),
            status=builder_params.get("status"),
            warning=builder_params.get("warning"),
            tags=builder_params.get("tags"),
            docutilsconf=builder_params.get("docutilsconf"),
            parallel=builder_params.get("parallel", 0),
        )
        test_tmp_dirs.append(sphinx_test_tempdir)
        _app.build()
        return _app

    yield _test_app

    for test_tmp_dir in reversed(test_tmp_dirs):
        shutil.rmtree(test_tmp_dir, True)


# ---------------------------------------------------------------------
# Fixture for sample_prj3.


@pytest.fixture(scope="module")
def sample_prj3(test_app):
    """Sample Prj 3 provides an external font noto-sans."""
    return test_app(buildername="html", srcdir="sample_prj_3")
