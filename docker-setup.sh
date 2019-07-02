#!/usr/bin/env sh

echo "The build environment consists of the following files:"
find /src/marketing-app

set -eux

# Clean up any defaults
rm -rf /etc/nginx/nginx.conf /etc/nginx/conf.d /var/lib/nginx /var/www

# Set up Nginx folders
mkdir -p /run/nginx
mkdir -p /var/www/marketing-app
mkdir -p /var/log/nginx
mkdir -p /var/lib/nginx/logs

# And non-root user for Nginx to run as
adduser --disabled-password --gecos "" www
usermod -aG www www

# Set up Nginx configuration in place
cp -r /src/marketing-app/nginx/* /etc/nginx

#
# Marketing app
#

# Build the contents to be published
npm install yarn -g
yarn install
yarn run build

# Publish everything necessary
cd /src/marketing-app/public/
cp -r . /var/www/marketing-app


#
# Finishing up
#

# Set permissions
chown -R www:www /var/www /var/log/nginx /var/lib/nginx/logs

# Clean up files not needed in final container
rm -rf /src/marketing-app
ls /src

# Show in logs what we're publishing
set +x

cd /var/www
echo "Ready to publish the following:"
find .
