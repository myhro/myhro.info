deploy:
	rsync -ahvzP --delete --exclude-from='.gitignore' --exclude-from='.rsyncignore' --progress . myhroinfo@dreamhost.ilieve.org:~/myhro.info/
