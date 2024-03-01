FROM node:18-alpine3
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 6000
CMD [ "node" , 'index.js' ]