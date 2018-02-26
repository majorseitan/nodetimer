#!/bin/bash

docker network create nodetimer
docker build -t blockfreie/nodetimer .
docker run -dp 27017:27017 --net nodetimer --name mongodb mongo
docker run -d --net nodetimer -p 3000:3000 blockfreie/nodetimer
