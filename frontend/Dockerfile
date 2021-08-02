FROM node:12

RUN mkdir -p /frontend

COPY . /frontend

WORKDIR /frontend

#  RUN npm install --silent 
RUN npm install --silent && npm audit fix

EXPOSE 4200

# Start app
WORKDIR /frontend
CMD npm start