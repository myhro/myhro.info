deploy:
	rsync -hrvzP --delete --exclude-from='.gitignore' --exclude-from='.rsyncignore' . myhro@viridian.ilieve.org:/var/www/myhro.info/
