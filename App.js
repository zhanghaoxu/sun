import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import {Provider} from 'react-redux';
import store from '@/store/index';
import AppNavigator from '@/navigation/AppNavigator';
import SplashScreen from 'react-native-splash-screen';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstBackActionTime: 0,
      statusBarColor: '#ddd',
    };
  }
  componentDidMount() {
    SplashScreen.hide();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.exitAppAfter2BackAction();
    return true;
  };

  exitAppAfter2BackAction = () => {
    //两次回退时间间隔小于1秒
    const timeStampNow = Date.now();
    if (timeStampNow - this.state.firstBackActionTime < 1500) {
      BackHandler.exitApp();
    } else {
      ToastAndroid.show('再按一次退出!', ToastAndroid.SHORT);
    }
    this.setState({
      firstBackActionTime: timeStampNow,
    });
  };
  render() {
    return (
      <Provider store={store}>
        <StatusBar hidden={false} backgroundColor={statusBarColor} />
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
