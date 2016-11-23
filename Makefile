deploy:
	rsync -hrvz --exclude=.git/ --progress . root@alloy.ilieve.org:/var/www/myhro.info/
