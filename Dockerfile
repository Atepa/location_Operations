FROM node:18
WORKDIR /home/node/app
COPY location_operation /home/node/app
RUN npm install
CMD npm start
EXPOSE 3000