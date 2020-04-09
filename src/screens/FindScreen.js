import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyWebView from '@/components/MyWebView';
import Config from 'react-native-config';
export default function FindScreen(props) {
  const webview_url = `${Config.WEBVIEW_BASE_URL}#/find`;
  return (
    <View style={styles.container}>
      <MyWebView navigation={props.navigation} url={webview_url} />
    </View>
  );
}

FindScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
