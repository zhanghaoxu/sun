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
        return dispatch(setIsLogin(v));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
