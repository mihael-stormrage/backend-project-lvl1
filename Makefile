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

brain-games:
	node bin/brain-games.js
