FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -q

COPY . .

CMD [ "npm", "start" ]
