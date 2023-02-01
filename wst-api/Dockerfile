FROM node:16

WORKDIR /usr/src/app/wst-api

COPY package*.json ./

RUN npm install

RUN npx sequelize db:create

RUN npx sequelize db:migrate

EXPOSE 3080

CMD ["npm", "run", "dev"]