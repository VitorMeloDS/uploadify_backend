# ==== Dev ====
FROM node:18.18.2-alpine as dev
# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

CMD ["npm", "run", "dev"]

# ==== Build ====
FROM node:18.18.2-alpine as build

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ==== Production ====
FROM node:16.18-alpine

# Create app directory
WORKDIR /app

# Bundle app source
COPY --from=build /app/dist .

COPY package*.json ./
RUN npm install --omit=dev

# Locale and timezone
RUN apk update
RUN apk add tzdata
RUN cp /usr/share/zoneinfo/America/Recife /etc/localtime
RUN echo "America/Recife" >  /etc/timezone

# Environment Variables
ENV TZ America/Recife
ENV LANG pt_BR.UTF-8
ENV LC_ALL pt_BR.UTF-8
ENV LANGUAGE pt_BR.UTF-8

EXPOSE 3000
CMD [ "node", "/app/src/server.js" ]