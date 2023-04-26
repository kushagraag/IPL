FROM node:latest

RUN npm install -g nodemon
WORKDIR /app
COPY ./package.json ./
# COPY ./package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]