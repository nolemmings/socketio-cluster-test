FROM node:latest
MAINTAINER Niels Krijger <niels@nolemmings.nl>

# Bundle Node.js app source
ADD /src /app
WORKDIR /app

# Install app dependencies
RUN npm install

EXPOSE  3000

CMD npm start
