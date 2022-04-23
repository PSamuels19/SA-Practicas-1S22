FROM nginx

# RUN sudo apt install nano && sudo apt install curl

COPY ./index.html /usr/share/nginx/html

COPY ./styles /usr/share/nginx/html/styles

COPY ./scripts /usr/share/nginx/html/scripts

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80