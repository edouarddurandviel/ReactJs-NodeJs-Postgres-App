# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.7.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "run", "dev"]


