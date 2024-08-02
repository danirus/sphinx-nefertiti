_CURRENT_VERSION = (0, 3, 6, "f", 0)  # following PEP 440


def get_version():
    major, minor, patch, letter, subv = _CURRENT_VERSION
    ver = "%s.%s.%s" % (major, minor, patch)
    if letter != "f":
        ver = "%s%s%s" % (ver, letter, subv)
    return ver
