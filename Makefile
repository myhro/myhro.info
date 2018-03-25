deploy:
	s3cmd sync --exclude-from .syncignore . s3://myhro.info/

test:
	bats tests/integration.bats
