FROM node:10.4.0-alpine
LABEL maintainer "Eric Hartline <eric.hartline@northwestern.edu>"

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh jq

ARG basename
ENV REACT_APP_BASENAME ${basename:-seinfeld}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 3000

RUN npm ci

ADD src src
ADD public public

ENTRYPOINT npm start