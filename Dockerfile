FROM node:14-apline
WORKDIR /opt/app
ADD package.json package.json
RUN yarn install
ADD . .
RUN yarn build
RUN yarn install --production
CMD ["node", "./dist/main.js"]