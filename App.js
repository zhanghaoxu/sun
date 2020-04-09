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
import NavigationService from '@/utils/navigationService';
import Loading from '@/components/Loading';
import Toast from '@/components/Toast';
import toastApi from '@/utils/toast';
import colors from '@/constants/Colors';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstBackActionTime: 0,
      statusBarColor: colors.main,
      loading: false,
      toasting: {
        text: '',
        buttonName: '',
        pressHandler: () => {},
      },
    };
  }
  componentDidMount() {
    SplashScreen.hide();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    //全局状态监听
    store.subscribe(() => {
      let needUpdateObj = {};
      let stateNew = store.getState().global;
      let stateOld = this.state;
      if (stateNew.loading !== stateOld.loading) {
        needUpdateObj.loading = stateNew.loading;
      }
      console.log('lall', stateNew.toasting, stateOld.toasting);
      if (stateNew.toasting.text !== stateOld.toasting.text) {
        needUpdateObj.toasting = stateNew.toasting;
      }
      console.log('lsdjf', needUpdateObj);
      this.setState(needUpdateObj);
    });
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
        <StatusBar
          hidden={false}
          animated={true}
          backgroundColor={this.state.statusBarColor}
        />

        <View style={styles.container}>
          <Loading isVisible={this.state.loading} />
          <Toast
            text={this.state.toasting.text}
            buttonName={this.state.toasting.buttonName}
            pressHandler={this.state.toasting.pressHandler}
            hideAction={() => {
              toastApi.hide();
            }}
          />
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
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
