FROM node:15

WORKDIR /app

COPY package.json .

RUN npm install

COPY . ./

ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "start"]

#run with commands: 
#docker build react-app .
#docker run -v ${pwd}:/app:ro -v /app/node_modules --env-file ./.env -p 3000:3000 -d --name react-app-container react-app