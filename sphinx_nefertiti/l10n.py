from babel import Locale


class LocaleProvider:
    def __init__(self, app):
        self.current_locale = app.config.language
        self.current_locale_url = ""
        self.current_locale_name = Locale(
            self.current_locale
        ).get_language_name(self.current_locale)
        theme_user_prefs = app.config.html_theme_options

        self._index = -1
        self._assets = []

        if len(theme_user_prefs.get("locales", [])) == 0:
            return

        for lc, url in theme_user_prefs["locales"]:
            orig_name = Locale(lc).get_language_name(lc)
            if lc == self.current_locale:
                self.current_locale_url = url
                name = orig_name
            else:
                lang_name = Locale(lc).get_language_name(app.config.language)
                name = f"{lang_name} - {orig_name}"
            self._assets.append({"lc": lc, "name": name, "url": url})
        self._assets.sort(key=lambda item: item["name"])

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._assets):
            raise StopIteration
        return self._assets[self._index]
