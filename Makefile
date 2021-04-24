install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run

docker:
	docker build -t brain-games .
	docker run --rm -ti brain-games /bin/bash

record:
	docker build -t brain-games:record --build-arg env=record .
	docker run --rm -ti -v "$(HOME)/.config/asciinema":/root/.config/asciinema brain-games:record /bin/bash

svg:
	npx svg-term --cast lArG86KKfUePxjImN9bGx6x5B --out preview.svg --no-cursor --width 80 --height 20 --window

brain-games:
	node bin/brain-games.js
