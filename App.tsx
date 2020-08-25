import React from 'react';
//redux状态管理
import {Provider} from 'react-redux';
import store from './src/store/index';
//app启动屏相关
import SplashScreen from 'react-native-splash-screen';
//视图逻辑路口（包括路由导航）
import AppViewContainer from './src/AppViewEntry';
//主题相关
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './src/constants/Theme';
//退出确认
import backActionConfirm from './src/utils/backActionConfirm';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
    //退出确认（根据配置确定行为）
    backActionConfirm.addListener();
    return () => {
      backActionConfirm.removeListener();
    };
  }, []);

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppViewContainer />
      </PaperProvider>
    </Provider>
  );
}
