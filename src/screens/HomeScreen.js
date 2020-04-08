import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import MyWebView from '../components/MyWebView';
import Config from 'react-native-config';

import {getAll} from '@/apis/todoList';
export default function HomeScreen(props) {
  getAll()
    .then(v => {
      console.log('allList:', v);
    })
    .catch(e => {
      console.log(e);
    });
  const webview_url = `${Config.WEBVIEW_BASE_URL}#/home`;
  return (
    <View style={styles.container}>
      <MyWebView navigation={props.navigation} url={webview_url} />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
