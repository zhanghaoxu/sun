import Colors from '@/constants/Colors';
const initialState = {
  loading: false,
  loadingText: '拼命加载中...',
  statusBarHidden: false,
  statusBarBackgroundColor: Colors.main,
  statusBarTranslucent: false,
};

const GlobalReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING_STATE':
      return Object.assign({}, state, {
        loading: action.loading,
        loadingText: action.loadingText
          ? action.loadingText
          : state.loadingText,
      });

    default:
      return state;
  }
};

export default GlobalReducers;
