FROM node:8.8.1
MAINTAINER Bernhard Prott

ADD ./package.json ./package.json
ADD ./public_html ./public_html
ADD ./webpack.config.build.js ./webpack.config.build.js
ADD ./webpack.config.js ./webpack.config.js
ADD ./restexpress.js ./restexpress.js
EXPOSE 8000
EXPOSE 3001
RUN npm install


CMD ["node", "restexpress.js"]
CMD ["npm", "run", "build"]
