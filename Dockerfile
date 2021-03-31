FROM node:14.16-alpine3.11

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

FROM node:14.16-alpine3.11

WORKDIR /app
COPY --from=0 /app/.nuxt/dist/client/ /app/

CMD yarn start