import React from 'react';
//redux状态管理
import {Provider} from 'react-redux';
import store from '@/store/index';
//app启动屏相关
import SplashScreen from 'react-native-splash-screen';
//视图逻辑路口（包括路由导航）
import AppViewContainer from './src/AppViewEntry';
//主题相关
import {Provider as PaperProvider} from 'react-native-paper';
import theme from '@/constants/Theme';
//回退操作相关 根据配置管理是否需要二次确认退出app
import {BackHandler} from 'react-native';
import {EXIT_APP_NEED_CONFIRM} from '@/constants/Config';
import backActionConfirmHandler from '@/utils/backActionConfirmHandler';
export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
    EXIT_APP_NEED_CONFIRM &&
      BackHandler.addEventListener(
        'hardwareBackPress',
        backActionConfirmHandler,
      );
  }

  componentWillUnmount() {
    EXIT_APP_NEED_CONFIRM &&
      BackHandler.removeEventListener(
        'hardwareBackPress',
        backActionConfirmHandler,
      );
  }

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
