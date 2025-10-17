# build stage
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# runtime stage
FROM node:16-alpine
WORKDIR /app
COPY --from=build /app /app
USER node
EXPOSE 3000
CMD ["node","server.js"]
