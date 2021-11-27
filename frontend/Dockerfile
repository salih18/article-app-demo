# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL http://localhost:8000
ARG REACT_APP_IMAGE_URL
ENV REACT_APP_IMAGE_URL http://localhost:8000/media

# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["npm", "start"]