FROM node:16

WORKDIR /usr/src/app/wst-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3080

CMD ["npm", "run", "dev"]