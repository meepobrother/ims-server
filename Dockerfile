FROM node:8
WORKDIR /www/src
COPY ./src /www/src
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
