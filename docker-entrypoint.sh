#!/bin/sh
set -eux

if [ -z "${MARKETING_HOST:-}" ]; then
  MARKETING_HOST="marketing.example.host"
fi

if ! [ -z "${BASIC_USER_AUTH:-}" ] && ! [ -z "${BASIC_PASS_AUTH:-}" ];then
   sh -c "echo -n '${BASIC_USER_AUTH}:' >> /etc/nginx/sites/.htpasswd"
   sh -c "openssl passwd -apr1 \"${BASIC_PASS_AUTH}\" >> /etc/nginx/sites/.htpasswd"
fi

sed -i 's+$MARKETING_HOST+'"${MARKETING_HOST}"'+g' /etc/nginx/sites/*.conf

nginx -c /etc/nginx/nginx.conf -g "daemon off;"
