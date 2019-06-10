FROM node:10.4.0-alpine
LABEL maintainer "Eric Hartline <eric.hartline@northwestern.edu>"

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh jq

ARG basename
ENV REACT_APP_BASENAME ${basename:-seinfeld}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package-lock.json ./

ADD package.json package-dev.json

RUN jq '. + {"homepage": "/seinfeld"}' package-dev.json > package.json \
  && rm package-dev.json

ADD src src
ADD public public

RUN npm install
RUN npm start