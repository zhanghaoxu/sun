const initialState = {
  loading: false,
  toasting: {
    text: '',
    buttonName: '',
    pressHandler: () => {},
  },
};

const GlobalReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING_STATE':
      return Object.assign({}, state, {
        loading: action.loading,
      });
    case 'SET_TOASTING_STATE':
      console.log('action:', action);
      return Object.assign({}, state, {
        toasting: action.toasting,
      });
    default:
      return state;
  }
};

export default GlobalReducers;
