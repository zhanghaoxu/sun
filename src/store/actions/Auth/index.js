import {isLogin} from '@/apis/auth';

export function setIsLogin(isLoginStatus) {
  return {
    type: 'SET_IS_LOGIN',
    isLogin: isLoginStatus,
  };
}

export function postIsLogin() {
  return dispatch => {
    return isLogin()
      .then(v => {
        console.log('v:', v);
        if (v) {
          return dispatch(setIsLogin(v));
        } else {
          return dispatch(setIsLogin(0));
        }
      })
      .catch(e => {
        return dispatch(setIsLogin(0));
      });
  };
}
