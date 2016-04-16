FROM node:5-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY node_modules /usr/src/app/
COPY dist /usr/src/app/

EXPOSE 8000
CMD [ "npm", "start" ]
