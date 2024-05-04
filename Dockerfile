FROM node:22-alpine3.18 as build-stage
WORKDIR /frontend
COPY . .
RUN yarn install
RUN yarn build

FROM node:22-alpine3.18 as production-stage
WORKDIR /frontend
COPY --from=build-stage /frontend/.next /frontend/.next
COPY --from=build-stage /frontend/node_modules /frontend/node_modules
COPY --from=build-stage /frontend/public /frontend/public
COPY --from=build-stage /frontend/package.json /frontend/package.json

EXPOSE 3001
CMD ["yarn", "start"]