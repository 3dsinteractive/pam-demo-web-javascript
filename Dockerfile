FROM node:14.16-alpine3.11
WORKDIR /app

COPY . .

RUN yarn add nuxt
RUN yarn
RUN yarn build
CMD yarn start

# FROM node:12.13.0-alpine

# WORKDIR /app
# COPY --from=0 /app/.nuxt/dist/client/ /app/
# COPY --from=0 /app/package*.json /app
# CMD yarn start