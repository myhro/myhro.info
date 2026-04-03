BRANCH ?= staging

STATIC_ASSETS = \
	imp/ \
	404.html \
	blog.html \
	favicon.ico \
	favicon.png \
	index.html \
	index.png \
	robots.txt

check:
	npx prettier --check src/

build: clean
	mkdir -p public/
	cp -r $(STATIC_ASSETS) public/

clean:
	rm -rf public/

deploy:
	npx wrangler pages deploy --branch $(BRANCH) --project-name myhro-info .

lint:
	DEBUG=eslint:cli-engine npx eslint --ext .js --ext .ts src/

prettier:
	npx prettier --write src/

serve: build
	BROWSER=none npx wrangler dev

tsc:
	npx tsc --noEmit

yamllint:
	yamllint --format colored --strict .github/workflows/ .yamllint.yaml
