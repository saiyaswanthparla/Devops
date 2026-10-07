FROM node:24-alpine AS build
WORKDIR /app
EXPOSE 80
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_APP_ENV
ENV VITE_APP_ENV=$VITE_APP_ENV
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
