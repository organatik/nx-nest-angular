#build stage
FROM node:18-alpine AS build

WORKDIR /organatik/api/src/app

RUN ls -alh

# Copy package-lock.json & package.json from host to inside container working directory
COPY ../../package.json ./
COPY ../../package-lock.json ./

RUN ls -alh

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
# Install deps inside container
RUN npm install

COPY . .

RUN npx nx build nest-api


################
## PRODUCTION ##
################
# Build another image named production
FROM node:18-alpine

# Set work dir
WORKDIR /organatik/api/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=build /organatik/api/src/app/dist ./dist

COPY ../../package.json ./
COPY ../../package-lock.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install --only=production

RUN ls ./dist -alh

RUN rm package*.json

EXPOSE 3000

CMD ["node", "dist/apps/nest-api/main.js"]
