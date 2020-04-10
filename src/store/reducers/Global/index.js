const initialState = {
  loading: false,
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
