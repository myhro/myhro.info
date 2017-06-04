deploy:
	rsync -hrvzP --delete --exclude-from='.gitignore' --exclude-from='.rsyncignore' . viridian.ilieve.org:/var/www/myhro.info/
