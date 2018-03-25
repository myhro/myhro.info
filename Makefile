deploy:
	s3cmd sync --exclude-from .syncignore . s3://myhro.info/
