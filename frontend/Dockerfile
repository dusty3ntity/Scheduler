FROM node:14

WORKDIR /fe

COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .

CMD [ "npm", "start" ]