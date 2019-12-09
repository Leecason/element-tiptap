#!/usr/bin/env sh

set -e

npm run build:example

cd dist

git init
git add -A
git commit -m 'deploy: 🎉'

git push -f git@github.com:Leecason/el-tiptap.git master:gh-pages

cd -
