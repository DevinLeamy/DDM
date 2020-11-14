FROM node:12

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200
CMD [ "node", "server.js" ]