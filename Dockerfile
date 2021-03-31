FROM node:14.16-alpine3.11

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
