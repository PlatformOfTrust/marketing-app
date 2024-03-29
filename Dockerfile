FROM ubuntu:18.04

ARG FORT_AWESOME_AUTH_TOKEN=""
ENV LC_ALL=C.UTF-8 \
    LANG=C.UTF-8 \
    FORT_AWESOME_AUTH_TOKEN=${FORT_AWESOME_AUTH_TOKEN}

ADD . /src/marketing-app
WORKDIR /src/marketing-app

RUN set -exu && apt-get clean && apt-get -y update \
 && apt-get -y install build-essential apt-transport-https lsb-release ca-certificates curl \
 && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
 && apt-get -y install build-essential \
    nodejs \
    gcc \
    git \
    autoconf \
    automake \
    libtool \
    nasm \
    nginx \
    openssl \
 && chmod +x docker-*.sh \
 && ./docker-setup.sh \
 && apt-get -y clean


EXPOSE 8080
ENTRYPOINT ["./docker-entrypoint.sh"]
