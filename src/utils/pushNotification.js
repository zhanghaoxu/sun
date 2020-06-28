import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
var PushNotification = require('react-native-push-notification');
import JPush from 'jpush-react-native';
export default function configPushNotification(channel = 'default') {
  console.log('pushNotification config');
  switch (channel) {
    case 'google':
      //react native push notifacation
      PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
          console.log('TOKEN:', token);
        },

        // (required) Called when a remote is received or opened, or local notification is opened
        onNotification: function(notification) {
          console.log('NOTIFICATION:', notification);

          // process the notification

          // (required) Called when a remote is received or opened, or local notification is opened
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },

        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
         * (optional) default: true
         * - Specified if permissions (ios) and token (android and ios) will requested or not,
         * - if not, you must call PushNotificationsHandler.requestPermissions() later
         * - if you are not using remote notification or do not have Firebase installed, use this:
         *     requestPermissions: Platform.OS === 'ios'
         */
        requestPermissions: Platform.OS === 'ios',
      });
      break;
    default:
      // jpush
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
      JPush.getRegistrationID(result =>
        console.log('registerID:' + JSON.stringify(result)),
      );
  }
}
