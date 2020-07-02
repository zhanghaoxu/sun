//回退操作相关 根据配置管理是否需要二次确认退出app

import {
  EXIT_APP_NEED_CONFIRM,
  EXIT_APP_TIME_DISTANCE,
} from '../constants/Config';
import {BackHandler, ToastAndroid} from 'react-native';

let __lastBackActionTime: number = 0;

type BackActionConfirmHandler = {
  __setLastBackActionTime(v: number): void;

  __exitAppAfter2BackAction(): boolean;

  addListener(): void;

  removeListener(): void;
};

class BackActionConfirm {
  constructor() {
    this.__exitAppAfter2BackAction = this.__exitAppAfter2BackAction.bind(this);
  }

  __setLastBackActionTime(v: number): void {
    __lastBackActionTime = v;
  }

  __exitAppAfter2BackAction(): boolean {
    //两次回退时间间隔小于1.5秒
    const timeStampNow = Date.now();
    if (timeStampNow - __lastBackActionTime < EXIT_APP_TIME_DISTANCE) {
      BackHandler.exitApp();
      return false;
    } else {
      console.log(111);
      ToastAndroid.show('再按一次退出!', ToastAndroid.SHORT);
    }
    this.__setLastBackActionTime(timeStampNow);
    return true;
  }

  addListener(): void {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.__exitAppAfter2BackAction,
    );
  }

  removeListener(): void {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.__exitAppAfter2BackAction,
    );
  }
}

let backActionConfirm: BackActionConfirmHandler = EXIT_APP_NEED_CONFIRM
  ? new BackActionConfirm()
  : {
      __exitAppAfter2BackAction() {
        return false;
      },
      __setLastBackActionTime(): void {},
      addListener(): void {},
      removeListener(): void {},
    };

export default backActionConfirm;
