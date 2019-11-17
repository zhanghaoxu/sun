const initialState = {
  isFetchingDakaMy: false,
  isFetchingMyReward: false,
  todayAmount: 0,
  totalAmount: 0,
  dakaStatistics: {
    maxSeriesCount: 0,
    totalDakaCount: 0,
    dakaGroupCount: 0,
    dakaRatio: 0,
    thumbCount: 0
  },
  groupList: [],
  ugcList: []
};

const MyReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MY_REWARD_END":
      return Object.assign({}, state, {
        isFetchingMyReward: false,
        ...action.data
      });
    case "GET_MY_REWARD_START":
      return Object.assign({}, state, {
        isFetchingMyReward: true
      });
    case "GET_MY_REWARD_ERROR":
      return Object.assign({}, state, {
        isFetchingMyReward: true
      });
    case "GET_DAKA_MY_END":
      return Object.assign({}, state, {
        isFetchingDakaMy: false,
        ...action.data
      });
    case "GET_DAKA_MY_START":
      return Object.assign({}, state, {
        isFetchingDakaMy: true
      });
    case "GET_DAKA_MY_ERROR":
      return Object.assign({}, state, {
        isFetchingDakaMy: true
      });
    default:
      return state;
  }
};

export default MyReducers;
