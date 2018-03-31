FROM node:8.9

RUN mkdir /code
WORKDIR /code
RUN curl -o- -L https://yarnpkg.com/install.sh | bash


COPY package.json .

RUN yarn
# RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]
