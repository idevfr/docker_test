# just installing dependencies
FROM node:26-alpine AS dependencies
WORKDIR /app
COPY package*.json .
RUN npm install
#building the app
FROM node:26-alpine AS builder
WORKDIR /app
COPY --from=dependencies ./app/node_modules ./node_modules
COPY package*.json ./ 
COPY tsconfig.json ./ 
COPY src ./src
RUN npx tsc
#finally running the app
FROM node:26-alpine AS production
WORKDIR /app
COPY --from=builder ./app/package.json .
RUN npm install --omit=dev
COPY --from=builder ./app/dist ./dist
EXPOSE 3001
CMD [ "node","dist/index.js" ]