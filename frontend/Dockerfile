FROM node:10

RUN mkdir -p /app
WORKDIR /app

# Copy app directory
COPY . /app

# Install and cache app dependencies
RUN npm install --silent
RUN npm install -g @angular/cli@1.7.1

EXPOSE 4200

# Start app
CMD ng serve --host 0.0.0.0 --disableHostCheck