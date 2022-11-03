FROM node:16.3-buster-slim
RUN apt-get update -qq && apt -y upgrade && \
    apt-get install -y git build-essential libpng-dev wget pkg-config glib2.0-dev libexpat1-dev autoconf nasm libtool dpkg g++
RUN wget https://github.com/libvips/libvips/releases/download/v8.12.2/vips-8.12.2.tar.gz
RUN tar -xzf vips-8.12.2.tar.gz
RUN cd vips-8.12.2 &&./configure && make && make install && ldconfig
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./ package-lock.json ./
RUN npm install
COPY . ./


# use command below
# docker build -t gatsbyblog . --platform linux/amd64
# docker run -it --platform linux/x86_64 -p 9000:9000 -v /Users/gojiteji/Documents/2020portfolio:/app/2020portfolio gatsbyblog /bin/bash
