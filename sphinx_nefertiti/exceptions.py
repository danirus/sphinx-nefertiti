import re

RED_HL = "\033[31m"
BLUE_HL = "\033[34m"
END_HL = "\033[0m"


class SphinxNefertitiError(Exception):
    def __init__(self, message):
        message = self.format(message)
        message = f"{RED_HL}sphinx-nefertiti{END_HL}: {message}"
        super().__init__(message)

    def format(self, message):
        return re.sub(
            r"hl\((?P<identifier>\w+)\)",
            rf"{BLUE_HL}\g<identifier>{END_HL}",
            message,
        )
