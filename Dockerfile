FROM node:carbon

EXPOSE 3000

COPY . /opt/nodetimer/
RUN cd /opt/nodetimer ; npm install
ENV NODE_ENV docker
CMD ["nodejs", "/opt/nodetimer/server.js"]
