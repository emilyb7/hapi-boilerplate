FROM node:8

## create app directory
WORKDIR usr/src/app

## install dependencies
COPY package*.json ./
RUN npm install

## Bundle app source
COPY . .

## Bind port
EXPOSE 7000

CMD [ "npm", "start" ]
