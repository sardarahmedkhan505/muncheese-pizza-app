FROM node:current-alpine3.13
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["npm", "start"]