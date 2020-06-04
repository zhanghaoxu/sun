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
import JPush from 'jpush-react-native';
export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
    EXIT_APP_NEED_CONFIRM &&
      BackHandler.addEventListener(
        'hardwareBackPress',
        backActionConfirmHandler,
      );

    JPush.init();
    //连接状态
    this.connectListener = result => {
      console.log('connectListener:' + JSON.stringify(result));
    };
    JPush.addConnectEventListener(this.connectListener);
    //通知回调
    this.notificationListener = result => {
      console.log('notificationListener:' + JSON.stringify(result));
    };
    JPush.addNotificationListener(this.notificationListener);
    //本地通知回调
    this.localNotificationListener = result => {
      console.log('localNotificationListener:' + JSON.stringify(result));
    };
    JPush.addLocalNotificationListener(this.localNotificationListener);
    //自定义消息回调
    this.customMessageListener = result => {
      console.log('customMessageListener:' + JSON.stringify(result));
    };
    JPush.addCustomMessagegListener(this.customMessageListener);
    //tag alias事件回调
    this.tagAliasListener = result => {
      console.log('tagAliasListener:' + JSON.stringify(result));
    };
    JPush.addTagAliasListener(this.tagAliasListener);
    //手机号码事件回调
    this.mobileNumberListener = result => {
      console.log('mobileNumberListener:' + JSON.stringify(result));
    };
    JPush.addMobileNumberListener(this.mobileNumberListener);
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
