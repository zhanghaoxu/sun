const initialState = {
  isLogin: false,
};

const AuthReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_LOGIN':
      return Object.assign({}, state, {
        isLogin: action.isLogin,
      });

    default:
      return state;
  }
};

export default AuthReducers;
