FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./ ./

RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]