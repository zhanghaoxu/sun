/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import injectedJavaScript from '../utils/injectedJavaScript';
// var PushNotification = require("react-native-push-notification");
// ...
class WebViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstBackActionTime: 0,
      canGoBack: false,
    };
  }

  openNewWebView(options) {
    this.props.navigation.push('WebView', options);
  }

  setTitle(title) {
    this.setState({
      title,
    });
  }

  pushNotification(opt) {
    // PushNotification.localNotification(opt);
  }

  handlerH5Event(e) {
    let data = JSON.parse(e.nativeEvent.data);
    switch (data.type) {
      case 'setTitle':
        this.setTitle(data.title);
        break;
      case 'pushNotification':
        this.pushNotification({
          message: data.message,
        });
        break;
      case 'openWebView':
        this.openNewWebView({
          url: data.url,
        });
    }
  }

  render() {
    let {url = 'https://www.baidu.com'} = this.props;

    return (
      <View style={{flex: 1}}>
        <WebView
          ref={myWeb => (this.webView = myWeb)}
          injectedJavaScript={injectedJavaScript.toString()}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onMessage={this.handlerH5Event.bind(this)}
          source={{uri: url}}
        />
      </View>
    );
  }

  onNavigationStateChange(navState) {
    //无header(三个首页)
    if (!this.props.updateShowHeaderCloseAction) {
      return false;
    }
    if (navState.canGoBack) {
      this.props.updateShowHeaderCloseAction(true);
    } else {
      this.props.updateShowHeaderCloseAction(false);
    }
    this.setState({
      canGoBack: navState.canGoBack,
    });
  }

  handleBackPress = () => {
    if (this.state.canGoBack) {
      this.webView.goBack();
    } else {
      this.props.navigation.goBack(null);
    }
  };
}

export default WebViewScreen;
