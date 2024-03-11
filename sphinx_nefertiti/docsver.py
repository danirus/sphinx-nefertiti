class DocsVersionProvider:
    def __init__(self, app):
        theme_user_prefs = app.config.html_theme_options

        self._index = -1
        self._assets = []

        if not "versions" in theme_user_prefs:
            return

        for name, url in theme_user_prefs["versions"]:
            self._assets.append({"name": name, "url": url})

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._assets):
            raise StopIteration
        return self._assets[self._index]
