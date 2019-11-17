import { getMyReward, getDakaMy } from "@/apis/base";
/**
 *
 * @param {*} data
 * 获取我的积分信息
 */
export function getMyRewardStart(data) {
  return {
    type: "GET_MY_REWARD_START",
    data
  };
}

export function getMyRewardEnd(data) {
  return {
    type: "GET_MY_REWARD_END",
    data
  };
}

export function getMyRewardError(data) {
  return {
    type: "GET_MY_REWARD_ERROR",
    data
  };
}

export const getMyRewardHttp = () => {
  return function(dispatch) {
    dispatch(getDakaMyStart());
    getMyReward()
      .then(data => {
        dispatch(getDakaMyEnd(data));
      })
      .catch(e => {
        dispatch(getDakaMyError());
      });
  };
};

/**
 *
 * @param {*} data
 * 获取我的打卡统计信息
 * 打卡日记
 * 我的小组
 */
export function getDakaMyStart(data) {
  return {
    type: "GET_DAKA_MY_START",
    data
  };
}

export function getDakaMyEnd(data) {
  return {
    type: "GET_DAKA_MY_END",
    data
  };
}

export function getDakaMyError(data) {
  return {
    type: "GET_DAKA_MY_ERROR",
    data
  };
}

export const getDakaMyHttp = () => {
  return function(dispatch) {
    dispatch(getDakaMyStart());
    getDakaMy()
      .then(data => {
        dispatch(getDakaMyEnd(data));
      })
      .catch(e => {
        dispatch(getDakaMyError());
      });
  };
};
