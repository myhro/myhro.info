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

deploy: build
	npx wrangler deploy

prettier:
	npx prettier --write src/

serve: build
	BROWSER=none npx wrangler dev

staging: build
	npx wrangler versions upload --preview-alias staging

tsc:
	npx tsc --noEmit

yamllint:
	yamllint --format colored --strict .github/workflows/ .yamllint.yaml
