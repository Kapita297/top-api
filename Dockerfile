FROM node:14-alpine
WORKDIR /top-api
ADD package.json package.json
RUN yarn install
ADD . .
RUN yarn build
CMD ["node", "./dist/main.js"]