#!/bin/bash

cd ./android &&
./gradlew clean &&

cd ../ &&
npm run start-with-port 