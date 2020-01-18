#!/usr/bin/env sh

set -e

npm run build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:dylandaviddavies/design3.git master:gh-pages