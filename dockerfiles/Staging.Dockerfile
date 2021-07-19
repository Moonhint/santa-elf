FROM node:15.12.0 as build-stage
WORKDIR /app
COPY ./ .

FROM nginx as production-stage
# RUN apt-get update \
#   && apt-get install -y wget unzip \
#   && apt-get clean
# RUN cd /etc/nginx/modules
# RUN wget http://dl1.centos-webpanel.com/files/nginx/modules/nginx-brotli-modules.zip
# RUN unzip nginx-brotli-modules.zip
# RUN rm -rf nginx-brotli-modules.zip 
RUN mkdir /app
COPY --from=build-stage /app/build /app
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80