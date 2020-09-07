import {isLogin as isLoginApi} from '@/apis/auth';
export default {
  namespace: 'auth',
  state: {
    isLogin: 0,
  },

  effects: {
    *getIsLogin({payload}, {select, call, put}) {
      const isLogin = yield call(isLoginApi);
      yield put({
        type: 'setIsLogin',
        payload: isLogin,
      });
      yield put({
        type: 'add',
      });
    },
  },

  reducers: {
    setIsLogin(state, {payload}) {
      return {...state, isLogin: payload};
    },
  },
};
