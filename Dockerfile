FROM node:12

WORKDIR /fixer

COPY . .

RUN npm install --silent

CMD npm start

