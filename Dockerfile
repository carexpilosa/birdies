FROM node:8.8.1
MAINTAINER Bernhard Prott

ADD ./package.json ./package.json
ADD ./package-lock.json ./package-lock.json
ADD ./public_html ./public_html
ADD ./webpack.config.build.js ./webpack.config.build.js
ADD ./webpack.config.js ./webpack.config.js
ADD ./restexpress.js ./restexpress.js
ADD ./server.js ./server.js
ADD ./servers.sh ./servers.sh
EXPOSE 8000
EXPOSE 3001
RUN npm install

CMD ["npm", "run", "build"]
#CMD ["servers.sh"]
