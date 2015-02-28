#!/usr/bin/env sh
./node_modules/.bin/schema-tsifier kitchen/schema.yml RecoTw --with-resources > kitchen/recotw.ts
./node_modules/.bin/tsc --target es5 -d kitchen/recotw.ts --module commonjs
./node_modules/.bin/browserify -t coffeeify --extension=".coffee" src/index.coffee -o dist/recotw.js --standalone="recotw"
