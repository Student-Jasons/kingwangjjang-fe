FROM node:20-alpine as build
FROM nginx:stable-alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 포트 오픈하고 nginx 실행
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
