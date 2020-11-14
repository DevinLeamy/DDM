FROM node:12

WORKDIR /

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@7.3.9

COPY . ./

RUN npm run build

EXPOSE 4200
CMD [ "node", "server.js" ]