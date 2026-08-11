FROM node:26-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY ./src ./src
RUN npx tsc


FROM node:26-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder ./app/dist ./dist
EXPOSE 3001
CMD [ "node","dist/index.js" ]
