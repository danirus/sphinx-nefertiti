.DEFAULT_GOAL := help

.PHONY: help build docs

export VERSION = `python -c "from sphinx_nefertiti import __version__; print(__version__)"`

clean:  ## Clean up built files.
	rm -rf build/
	rm -rf site/css/nftt-pygments*.*
	rm -rf site/css/sphinx-nefertiti*.*
	rm -rf site/js/sphinx-nefertiti*.*
	# rm -f sphinx_nefertiti/static/img/*.svg
	# rm -f sphinx_nefertiti/static/assets/*
	rm -f sphinx_nefertiti/static/snftt-*.*
	make -C docs clean

lint:  ## Run pre-commit hook checks.
	npm run css-lint-vars
	pre-commit run --all-files --show-diff-on-failure

py-tests:  ## Run Python tests with coverage.
	coverage erase
	coverage run --source=sphinx_nefertiti -m pytest -ra
	coverage report -m
	@sh ./ccsvg.sh ||:

js-tests:  ## Run JavaScript tests.
	npm run test


build-ext: i18n-compile  ## Build Sphinx extension.
	npm run build
	mkdir -p sphinx_nefertiti/static/
	mkdir -p sphinx_nefertiti/colorsets/
	cp site/css/bootstrap-icons.min.css			sphinx_nefertiti/static/
	cp site/css/bootstrap-icons.woff2 			sphinx_nefertiti/static/
	cp site/js/*.min.js               		  	sphinx_nefertiti/static/
	cp site/js/*.min.js.map           		  	sphinx_nefertiti/static/
	cp site/css/sphinx-nefertiti*.min.css     	sphinx_nefertiti/colorsets/
	cp site/css/sphinx-nefertiti*.min.css.map 	sphinx_nefertiti/colorsets/
	cp site/css/nftt-pygments.min.css 			docs/source/static
	cp site/css/nftt-pygments.min.css.map		docs/source/static
	python -m build

build-docs:  ## Create sphinx-nefertiti documentation.
	make -C docs clean
	make -C docs html

debug-docs:  ## Create sphinx-nefertiti documentation with debug enabled.
	make -C docs clean
	python debug_sphinx.py docs/source docs/build -T

serve-site:  ## Web server for content from directory site.
	python -m http.server -d site/ 8192

serve-lcov:  ## Web server for content from lcov-report directory.
	python -m http.server -d js/coverage/lcov-report 8193

serve-docs:  build-docs  ## Web server for the sphinx-nefertiti documentation.
	python -m http.server -d docs/build/html 8194

i18n-extract:  ##  Extract i18n messages to sphinx_nefertiti/locale/sphinx.pot.
	@pybabel extract -F ./babel.cfg \
		--input-dirs=sphinx_nefertiti \
		--output-file=sphinx_nefertiti/locale/sphinx.pot \
		--copyright-holder='Developers of Nefertiti for Sphinx' \
		--keywords='_ __ l_ lazy_gettext trans' \
		--project=sphinx-nefertiti \
		--version=${VERSION}
	@pybabel update \
		-i sphinx_nefertiti/locale/sphinx.pot \
		-d sphinx_nefertiti/locale \
		-D sphinx

i18n-new-locale:  ## Add new locale (pass argument LOCALE=<iso-639-1-code>).
	@pybabel init \
		-i sphinx_nefertiti/locale/sphinx.pot \
		-d sphinx_nefertiti/locale \
		-l ${LOCALE} \
		-D sphinx

i18n-compile:  ## Compile translation catalogs (PO) to binary files (MO).
	@pybabel compile -d sphinx_nefertiti/locale -D sphinx

help:  ## Show help message.
	@IFS=$$'\n' ; \
	help_lines=(`fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##/:/'`); \
	printf "%s\n\n" "Usage: make [task]"; \
	printf "%-20s %s\n" "task" "help" ; \
	printf "%-20s %s\n" "------" "----" ; \
	for help_line in $${help_lines[@]}; do \
		IFS=$$':' ; \
		help_split=($$help_line) ; \
		help_command=`echo $${help_split[0]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
		help_info=`echo $${help_split[2]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
		printf '\033[36m'; \
		printf "%-20s %s" $$help_command ; \
		printf '\033[0m'; \
		printf "%s\n" $$help_info; \
	done
