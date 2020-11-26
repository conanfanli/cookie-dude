#!/bin/bash

PYPI_VERSION=`pip search {{cookiecutter.project_name}}| grep '[0-9]+\.[0-9]+\.[0-9]+' -E -o`
LOCAL_VERSION=`cat {{cookiecutter.project_name}}/__init__.py | grep '[0-9]+\.[0-9]+\.[0-9]+' -E -o`

if [[ "$PYPI_VERSION" != "$LOCAL_VERSION" ]]
then
    echo Version is bumped \($LOCAL_VERSION != $PYPI_VERSION\)
    exit 0
else
    echo Version is NOT bumped \($LOCAL_VERSION == $PYPI_VERSION\)
    exit 1
fi
