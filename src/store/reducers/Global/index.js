import Colors from '@/constants/Colors';
const initialState = {
  loading: false,
  statusBarHidden: false,
  statusBarBackgroundColor: Colors.main,
  statusBarTranslucent: false,
};

const GlobalReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING_STATE':
      return Object.assign({}, state, {
        loading: action.loading,
      });

    default:
      return state;
  }
};

export default GlobalReducers;
