FROM node:16 as build-stage

WORKDIR /app

COPY package*.json /app/
RUN yarn install

COPY ./ /app/
RUN yarn build

FROM nginx:1.15
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf