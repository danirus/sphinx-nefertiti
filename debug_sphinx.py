# Run like:
#
#   $ python debug_sphinx.py docs/source docs/build -T
#

import re
import sys

from sphinx.cmd.build import main

if __name__ == "__main__":
    sys.argv[0] = re.sub(r"(-script\.pyw?|\.exe)?$", "", sys.argv[0])
    sys.exit(main())
