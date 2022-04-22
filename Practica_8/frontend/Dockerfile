FROM nginx

RUN apk add nano && apk add curl

COPY ./index.html /usr/share/nginx/html

COPY ./styles /usr/share/nginx/html

COPY ./scripts /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80