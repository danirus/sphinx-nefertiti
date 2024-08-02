from pathlib import Path

from setuptools import find_packages, setup


BASE_DIR = Path(__file__).parent


readme = ""
with open(BASE_DIR / "README.md", "r") as readme_file:
    readme = readme_file.read()


requirements = []
with open(BASE_DIR / "requirements.txt", "r") as req_file:
    for item in req_file:
        requirements.append(item)


setup(
    name="sphinx-nefertiti",
    version="0.3.6",
    packages=find_packages(),
    include_package_data=True,
    license="MIT",
    description="The Nefertiti for Sphinx theme.",
    long_description=readme,
    long_description_content_type="text/markdown",
    author="Daniela Rus Morales",
    author_email="danirus@eml.cc",
    maintainer="Daniela Rus Morales",
    maintainer_email="danirus@eml.cc",
    url="https://github.com/danirus/sphinx-nefertiti",
    install_requires=requirements,
    setup_requires=["wheel"],
    entry_points = {
        'sphinx.html_themes': [
            'sphinx_nefertiti = sphinx_nefertiti',
        ]
    },
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Environment :: Web Environment",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Framework :: Sphinx",
        "Framework :: Sphinx :: Theme",
        "Topic :: Documentation",
        "Topic :: Software Development :: Documentation",
    ],
    zip_safe=True,
)
