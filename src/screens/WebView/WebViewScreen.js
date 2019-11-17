/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, BackHandler} from 'react-native';
import MyWebView from '@/components/MyWebView';
import WebViewHeader from './components/WebViewHeader';

// ...
class WebViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      shareInfo: {},
      showHeaderCloseAction: false,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    //三个首页
    this.myWebView.handleBackPress();
    return true;
  };

  updateShowHeaderCloseAction(v) {
    this.setState({
      showHeaderCloseAction: v,
    });
  }

  closeWebView() {
    this.props.navigation.goBack(null);
  }

  goBackPage() {
    this.myWebView.handleBackPress();
  }

  render() {
    let title = this.state.title;
    let shareInfo = this.state.shareInfo;
    let showHeaderCloseAction = this.state.showHeaderCloseAction;
    return (
      <View style={{flex: 1}}>
        <WebViewHeader
          title={title}
          shareInfo={shareInfo}
          showHeaderCloseAction={showHeaderCloseAction}
          goBackPage={this.goBackPage.bind(this)}
          closeWebView={this.closeWebView.bind(this)}
        />
        <MyWebView
          ref={myWebView => {
            this.myWebView = myWebView;
          }}
          navigation={this.props.navigation}
          updateShowHeaderCloseAction={this.updateShowHeaderCloseAction.bind(
            this,
          )}
        />
      </View>
    );
  }
}

export default WebViewScreen;
