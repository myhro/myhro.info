DOMAIN_PROD := myhro.info
DOMAIN_TEST := test.myhro.info

deploy:
	s3cmd sync --exclude-from .syncignore . s3://$(DOMAIN_TEST)/

deploy-prod:
	s3cmd sync --exclude-from .syncignore . s3://$(DOMAIN_PROD)/

test:
	DOMAIN=$(DOMAIN_TEST) bats tests/integration.bats

test-prod:
	DOMAIN=$(DOMAIN_PROD) bats tests/integration.bats
