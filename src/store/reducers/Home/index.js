const initialState = {
  finishList: [],
  unFinishList: [],
  allList: [],
};

const HomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'addFinishList':
      return {
        ...state,
        finishList: [...action.finishList, ...state.finishList],
      };
    case 'addUnFinishList':
      return {
        ...state,
        unFinishList: [...action.unFinishList, ...state.unFinishList],
      };
    case 'allList':
      return {...state, allList: [...action.allList, ...state.allList]};
    default:
      return state;
  }
};

export default HomeReducers;
