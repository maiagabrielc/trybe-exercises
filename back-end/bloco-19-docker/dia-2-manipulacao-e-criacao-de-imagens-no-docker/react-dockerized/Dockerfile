FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# # Step 1
# FROM node:10-alpine
# # Step 2
# WORKDIR /usr/src/app
# # Step 3
# COPY ["./package.json", "./package-lock.json", "./"]
# # Step 4
# RUN ["npm", "install"]
# # Step 5
# COPY ["./src", "./"]
# # Step 6
# ENTRYPOINT [ "npm", "start" ]

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
