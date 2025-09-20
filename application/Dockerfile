## Stage 1
FROM node:18-slim as Build

WORKDIR /app

## COPY package*.json ./

COPY . . 

RUN npm install
RUN npm install -g nodemon
RUN npm run build
RUN npm prune --production

## Stage 2
FROM node:18-slim

WORKDIR /app

COPY --from=Build /app /app

EXPOSE 3000


CMD ["npm", "start"]






