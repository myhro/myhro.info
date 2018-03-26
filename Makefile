deploy:
	@if [[ -z "$(BUCKET)" ]]; then \
		echo "BUCKET not set"; \
		exit 1; \
	fi
	s3cmd sync --exclude-from .syncignore . s3://$(BUCKET)/

deploy-prod: BUCKET = myhro.info
deploy-prod: deploy

deploy-test: BUCKET = test.myhro.info
deploy-test: deploy

test:
	bats tests/integration.bats

test-prod: export DOMAIN = myhro.info
test-prod: test

test-test: export DOMAIN = test.myhro.info
test-test: test
