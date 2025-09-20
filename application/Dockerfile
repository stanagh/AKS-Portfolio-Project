# Stage 1: Build
FROM node:18-alpine as Build

WORKDIR /app

COPY package*.json ./
RUN npm ci && npm cache clean --force

COPY . .
RUN npm run build

# Stage 2: Serve
FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=Build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]