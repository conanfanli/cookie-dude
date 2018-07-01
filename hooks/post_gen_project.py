import os
import shutil

print(os.getcwd())


def remove(filepath):
    if os.path.isfile(filepath):
        os.remove(filepath)
    elif os.path.isdir(filepath):
        shutil.rmtree(filepath)


has_frontend = '{{cookiecutter.has_frontend}}' == 'y'
use_heroku = '{{cookiecutter.use_heroku}}' == 'y'

FRONTEND_FILES = ["src", "tsconfig.json", "webpack.config.js", "package.json"]

if not has_frontend:
    [remove(f) for f in FRONTEND_FILES]

if not use_heroku:
    remove("runtime.txt")
