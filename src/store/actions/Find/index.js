import { getCommunityAllList, queryHomeList } from "@/apis/base";
export function updateActiveCommunityId(data) {
  return {
    type: "UPDATE_ACTIVE_COMMUNITY_ID",
    data
  };
}
export function getCommunityListStart() {
  return {
    type: "GET_COMMUNITY_LIST_START"
  };
}

export function getCommunityListEnd(data) {
  return {
    type: "GET_COMMUNITY_LIST_END",
    data
  };
}

export function getCommunityListError() {
  return {
    type: "GET_COMMUNITY_LIST_ERROR"
  };
}

export function getFeedListStart() {
  return {
    type: "GET_FEED_LIST_START"
  };
}

export function getFeedListEnd(data) {
  return {
    type: "GET_FEED_LIST_END",
    data
  };
}

export function getFeedListError() {
  return {
    type: "GET_FEED_LIST_ERROR"
  };
}

export const getCommunityListHttp = () => {
  return function(dispatch) {
    dispatch(getCommunityListStart());

    getCommunityAllList()
      .then(data => {
        dispatch(getCommunityListEnd(data));
      })
      .catch(e => {
        dispatch(getCommunityListError());
        console.log(e);
      });
  };
};

export const updateActiveCommunityIdHandler = id => {
  return function(dispatch) {
    dispatch(updateActiveCommunityId(id));
    dispatch(getFeedListStart());
    queryHomeList({
      communityId: id
    })
      .then(data => {
        dispatch(getFeedListEnd(data));
      })
      .catch(e => {
        dispatch(getFeedListError());
        console.log(e);
      });
  };
};

export const getFeedListHttp = id => {
  return function(dispatch) {};
};
