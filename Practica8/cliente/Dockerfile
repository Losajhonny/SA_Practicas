#FROM node
#WORKDIR /app
#COPY ./app /app
#RUN npm install
#RUN npm run build

#COPY --from=build ./app/build /usr/local/apache2/htdocs
FROM httpd:2.4
COPY . /usr/local/apache2/htdocs
