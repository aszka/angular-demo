FROM nginx:alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/html
COPY /dist/angular-demo .
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
