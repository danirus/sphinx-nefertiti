#!/usr/bin/env bash

if [ "${ENV}" != "testing" ]; then
    coverage-badge > coverage.svg
fi
