const initialState = {
  userInfo: {
    name: "",
    age: 0
  }
};

const HomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return Object.assign({}, state, {
        userInfo: {
          name: action.name
        }
      });
    case "CHANGE_AGE":
      return Object.assign({}, state, {
        userInfo: {
          age: action.age
        }
      });
    default:
      return state;
  }
};

export default HomeReducers;
