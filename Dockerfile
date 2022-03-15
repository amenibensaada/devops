# Chrome 80 & Firefox 72
 
# pull image
FROM cypress/browsers:node13.6.0-chrome80-ff72
# make directory inside container
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
# execute the tests
RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run --browser chrome


FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN npm run test
# RUN npm run test:cypress
EXPOSE 8080
CMD [ "node", "index.js" ]