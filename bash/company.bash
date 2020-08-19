#!/bin/bash
# with company computer, you should run `npm start-with-port`
# default port change to 8789 https://github.com/facebook/react-native/issues/10715
cd ./android &&
./gradlew clean &&
#https://github.com/luggit/react-native-config
cd ../ &&
npm run company