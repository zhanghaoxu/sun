import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import MyWebView from '../components/MyWebView';
import Config from 'react-native-config';
export default function SettingsScreen(props) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  const webview_url = `${Config.WEBVIEW_BASE_URL}#/my`;
  return (
    <View style={styles.container}>
      <MyWebView navigation={props.navigation} url={webview_url} />
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
