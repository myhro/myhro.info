deploy:
	rsync -hrvzP --delete --exclude-from='.rsyncignore' . viridian.ilieve.org:/var/www/myhro.info/
