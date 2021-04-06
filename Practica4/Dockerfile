FROM node:14
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .

# docker compose
# docker-compose up --build

# sin docker compose
# CMD [ "node", "src/index.js" ]
# docker build --tag node-docker .
# docker run -d -p 3000:3000 --name practica7 node-docker

# docker run -p 8080:8080 --name dockerjenkins jenkins/jenkins