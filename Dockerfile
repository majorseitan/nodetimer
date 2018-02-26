FROM node:carbon

EXPOSE 3000

COPY . /opt/nodetimer/
ENV NODE_ENV docker
CMD ["nodejs", "/opt/nodetimer/server.js"]