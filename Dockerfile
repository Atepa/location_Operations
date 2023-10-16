FROM node:18
WORKDIR /home/node/app
COPY location_Operation /home/node/app
RUN npm install
CMD npm start
EXPOSE 3000