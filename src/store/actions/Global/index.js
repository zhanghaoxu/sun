import { queryDakaList, getUserInfo as getUserInfoReq } from "@/apis/base";

export function getUserInfoStart(data) {
  return {
    type: "GET_USER_INFO_START",
    data
  };
}

export function getUserInfoEnd(data) {
  return {
    type: "GET_USER_INFO_END",
    data
  };
}

export function getUserInfoError(data) {
  return {
    type: "GET_USER_INFO_ERROR",
    data
  };
}

export const getUserInfoHttp = () => {
  return function(dispatch) {
    dispatch(getUserInfoStart());
    getUserInfoReq()
      .then(data => {
        dispatch(getUserInfoEnd(data));
      })
      .catch(e => {
        dispatch(getUserInfoError());
      });
  };
};

export function getJoinedListStart() {
  return {
    type: "GET_JOINED_LIST_START"
  };
}

export const getJoinedListHttp = () => {
  return function(dispatch) {
    dispatch(getJoinedListStart());

    queryDakaList()
      .then(data => {
        console.log("get joined list");
        dispatch(getJoinedListEnd(data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export function getJoinedListEnd(data) {
  return {
    type: "GET_JOINED_LIST_END",
    data
  };
}
