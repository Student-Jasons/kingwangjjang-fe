# docker run 전에 npm run build를 실행해야 함.

# nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용합니다.
FROM nginx
FROM node:latest

# root 에 app 폴더를 생성
RUN mkdir /app

# work dir 고정
WORKDIR /app

RUN npm install 
RUN npm build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 80포트 오픈하고 nginx 실행
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
