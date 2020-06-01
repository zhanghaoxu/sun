import React from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import {Provider} from 'react-redux';
import store from '@/store/index';
import SplashScreen from 'react-native-splash-screen';
import AppViewContainer from './src/AppViewEntry';
import colors from '@/constants/Colors';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.main,
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstBackActionTime: 0,
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
        <PaperProvider theme={theme}>
          <AppViewContainer />
        </PaperProvider>
      </Provider>
    );
  }
}
