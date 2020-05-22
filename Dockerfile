FROM node:carbon

EXPOSE 3000

COPY . /opt/nodetimer/
RUN cd /opt/nodetimer ; npm install ; npm update ; npm audit fix
RUN sed -i '55d' /opt/nodetimer/node_modules/express-logger/logger.js
ENV NODE_ENV docker
CMD ["nodejs", "/opt/nodetimer/server.js"]
