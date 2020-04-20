FROM node:12

RUN mkdir -p /home/node/seqboilerplate/node_modules && chown -R node:node /home/node/seqboilerplate

WORKDIR /home/node/seqboilerplate

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3002

CMD [ "npm", "run", "dev" ]
