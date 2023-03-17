# syntax=docker/dockerfile:1

FROM node:18
RUN apt update
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
EXPOSE 3000

# CMD npm start
CMD [ "node", "run","start" ]
