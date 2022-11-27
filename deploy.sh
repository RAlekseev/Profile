#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist
cp index.html 404.html

# если вы публикуете на пользовательский домен
 echo 'www.ralekseev.org' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:RAlekseev/Profile.git master:gh-pages

cd -