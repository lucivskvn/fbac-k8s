FROM node:8

RUN mkdir -p /backend \
    -p /contract  \
    -p /gateway

COPY . /backend
COPY ./contract /contract
COPY ./gateway /gateway

WORKDIR /backend

#  RUN npm install --silent 
RUN npm install --silent && npm audit fix

EXPOSE 3000

# Start app
WORKDIR /backend
CMD npm start