import sleep from '../utils/sleep';
export default {
  namespace: 'index',
  state: {
    number: 1,
    loading: false,
    loadingText: '',
    statusBarHidden: false,
    statusBarTranslucent: false,
  },

  effects: {
    *addNumberAsync({payload}, {select, call, put}) {
      yield call(sleep);
      yield put({
        type: 'add',
      });
    },
  },

  reducers: {
    add(state) {
      const number = state.number + 1;
      return {...state, number};
    },
    setShowLoading(state, {payload}) {
      return {...state, loading: true, loadingText: payload};
    },
    setHideLoading(state) {
      return {...state, loading: false, loadingText: ''};
    },
    updateState(state, {payload: data}) {
      return {...state, ...data};
    },
  },
};
