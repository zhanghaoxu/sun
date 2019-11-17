const initialState = {
  joinedList: [],
  isFetchingJoinedList: false,
  isFetchingUserInfo: false,
  userInfo: {
    isAuthorized: false,
    nickName: "未登录",
    avatarUrl: "",
    bindTime: ""
  }
};

const GlobalReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOINED_LIST_END":
      return Object.assign({}, state, {
        isFetchingJoinedList: false,
        joinedList: action.data
      });
    case "GET_JOINED_LIST_START":
      return Object.assign({}, state, {
        isFetchingJoinedList: true
      });
    case "GET_USER_INFO_END":
      return Object.assign({}, state, {
        isFetchingUserInfo: false,
        userInfo: action.data
      });
    case "GET_USER_INFO_START":
      return Object.assign({}, state, {
        isFetchingUserInfo: true
      });
    case "GET_USER_INFO_ERROR":
      return Object.assign({}, state, {
        isFetchingUserInfo: true
      });
    default:
      return state;
  }
};

export default GlobalReducers;
