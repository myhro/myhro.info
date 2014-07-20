FROM debian:wheezy
RUN apt-get update
RUN apt-get install -y libapache2-mod-php5
ENV APACHE_LOCK_DIR /var/lock/apache2/
ENV APACHE_LOG_DIR /var/log/apache2/
ENV APACHE_PID_FILE /var/run/apache2/httpd.pid
ENV APACHE_RUN_GROUP www-data
ENV APACHE_RUN_USER www-data
RUN sed -i '/ServerSignature On/d; /ServerSignature/s/#//' /etc/apache2/conf.d/security
RUN sed -i '/ServerTokens OS/s/OS/ProductOnly/' /etc/apache2/conf.d/security
RUN sed -i 's/Indexes //' /etc/apache2/sites-available/default
RUN sed -i '/expose_php/s/On/Off/' /etc/php5/apache2/php.ini
CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]
