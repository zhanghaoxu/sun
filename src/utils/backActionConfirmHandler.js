import {BackHandler, ToastAndroid} from 'react-native';
import {EXIT_APP_TIME_DISTANCE} from '@/constants/Config';

let __lastBackActionTime = 0;
class BackActionConfirm {
  __setLastBackActionTime(v) {
    __lastBackActionTime = v;
  }

  exitAppAfter2BackAction() {
    //两次回退时间间隔小于1.5秒
    const timeStampNow = Date.now();
    if (timeStampNow - __lastBackActionTime < EXIT_APP_TIME_DISTANCE) {
      BackHandler.exitApp();
      return;
    } else {
      ToastAndroid.show('再按一次退出!', ToastAndroid.SHORT);
    }
    this.__setLastBackActionTime(timeStampNow);
  }
}

let backActionConfirm = new BackActionConfirm();

export default function handler() {
  backActionConfirm.exitAppAfter2BackAction();
  return true;
}
