//回退操作相关 根据配置管理是否需要二次确认退出app

import {
  EXIT_APP_NEED_CONFIRM,
  EXIT_APP_TIME_DISTANCE,
} from '@/constants/Config';
import {BackHandler, ToastAndroid} from 'react-native';

let __lastBackActionTime = 0;

class BackActionConfirm {
  constructor() {
    this.__exitAppAfter2BackAction = this.__exitAppAfter2BackAction.bind(this);
  }

  __setLastBackActionTime(v) {
    __lastBackActionTime = v;
  }

  __exitAppAfter2BackAction() {
    //两次回退时间间隔小于1.5秒
    const timeStampNow = Date.now();
    if (timeStampNow - __lastBackActionTime < EXIT_APP_TIME_DISTANCE) {
      BackHandler.exitApp();
      return;
    } else {
      console.log(111);
      ToastAndroid.show('再按一次退出!', ToastAndroid.SHORT);
    }
    this.__setLastBackActionTime(timeStampNow);
    return true;
  }

  addListener() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.__exitAppAfter2BackAction,
    );
  }

  removeListener() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.__exitAppAfter2BackAction,
    );
  }
}

let backActionConfirm = EXIT_APP_NEED_CONFIRM
  ? new BackActionConfirm()
  : {
      addListener() {},
      removerListener() {},
    };

export default backActionConfirm;
