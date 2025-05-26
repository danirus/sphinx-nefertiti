class L10nProvider:
    def __init__(self, app):
        self.app = app
        self.theme_defaults = app.builder.theme.get_options()
        self.theme_custom = app.config.html_theme_options

        self._index = -1
        self._languages = []

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._languages):
            raise StopIteration
        return self._languages[self._index]
