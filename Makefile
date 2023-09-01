.DEFAULT_GOAL := help

.PHONY: help build docs

clean:  ## Clean up built files.
	rm -rf build/
	rm -rf site/css/nftt-pygments*.*
	rm -rf site/css/sphinx-nefertiti*.*
	rm -rf site/js/sphinx-nefertiti*.*
	# rm -f sphinx_nefertiti/static/img/*.svg
	# rm -f sphinx_nefertiti/static/assets/*
	rm -f sphinx_nefertiti/static/snftt-*.*
	make -C docs clean

build-ext:  ## Build Sphinx extension.
	npm run build
	mkdir -p sphinx_nefertiti/colorsets/
	cp site/css/bootstrap-icons.css   			sphinx_nefertiti/static/
	cp site/css/bootstrap-icons.woff2 			sphinx_nefertiti/static/
	cp site/js/*.min.js               		  	sphinx_nefertiti/static/
	cp site/js/*.min.js.map           		  	sphinx_nefertiti/static/
	cp site/css/sphinx-nefertiti*.min.css     	sphinx_nefertiti/colorsets/
	cp site/css/sphinx-nefertiti*.min.css.map 	sphinx_nefertiti/colorsets/
	cp site/css/nftt-pygments.min.css 			docs/source/_static
	cp site/css/nftt-pygments.min.css.map		docs/source/_static
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
