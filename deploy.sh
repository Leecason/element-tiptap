#!/usr/bin/env sh

set -e

npm run build:demo

cd dist

git init
git add -A
git commit -m 'deploy: 🎉[skip ci]'

git push -f git@github.com:Leecason/element-tiptap.git master:gh-pages

cd -
