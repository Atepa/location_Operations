FROM node:18
WORKDIR /home/node/app
COPY location_op./
RUN npm install
CMD npm start
EXPOSE 3000