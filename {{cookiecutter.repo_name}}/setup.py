#!/usr/bin/env python

from codecs import open
from os import path

from setuptools import find_packages, setup

from {{cookiecutter.project_name}} import VERSION

here = path.abspath(path.dirname(__file__))

# Get the long description from the README file
with open(path.join(here, "README.rst"), encoding="utf-8") as f:
    long_description = f.read()

setup(
    name="{{cookiecutter.project_name}}",
    version=VERSION,
    description="Python type code generator",
    long_description=long_description,
    url="https://github.com/conanfanli/{{cookiecutter.project_name}}",
    packages=find_packages(exclude=["tests"]),
    include_package_data=True,
    python_requires="~=3.8",
    install_requires=[
        "pyyaml",
    ],
    extras_require={"dev": ["ipython", "mypy"]},
    classifiers=[
        "Development Status :: 3 - Alpha",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3.8",
    ],
    keywords="Python,TypeScript,Dataclass,Code Generation",
    author="Conan Li",
    author_email="conanlics@gmail.com",
    license="MIT",
    # use entry_points if exporting scripts
    # entry_points={
    #     "console_scripts": ["{{cookiecutter.project_name}}=some_module:main"],
    # },
)
