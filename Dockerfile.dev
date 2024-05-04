FROM node:22-alpine3.18
WORKDIR /frontend

COPY ./package.json /frontend/package.json
COPY ./yarn.lock /frontend/yarn.lock
RUN yarn install

COPY . /frontend

CMD ["yarn", "dev"]