FROM node:14

WORKDIR /be

COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .

CMD [ "npm", "start" ]