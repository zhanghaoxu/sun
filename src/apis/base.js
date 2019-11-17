import request from "@/utils/request";

/**
 * 查询所有圈子列表
 * @export
 */
export function getCommunityAllList() {
  return request.get({
    url: "/api/cq/community/queryShowCommunities"
  });
}

export function getDakaList(data = { page: 0, size: 10 }) {
  return request.post({
    url: "/api/daka/my/detail",
    data
  });
}

export function createGroup(data) {
  return request.post({
    url: "/api/group/create",
    needToast: true,
    data
  });
}

/**
 * 随机加入圈子
 * @export
 */
export function randomJoinCommunity() {
  return request.post({
    url: "/api/cq/community/randomJoin",
    loading: true
  });
}

/**
 * 我的接口
 * @export
 */
export function getDakaMy() {
  return request.post({
    url: "/api/daka/my",
    checkAuth: true
  });
}

export function queryImageUpload(data) {
  return request.post({
    url: "http://10.206.59.45:8181/api/image/upload",
    loading: true,
    data
  });
}

export function queryNosData(data) {
  return request.post({
    url: "/api/image/upload",
    data
  });
}

export function queryHomeList(data) {
  return request.post({
    url: "/api/group/feed/list",
    data
  });
}

export function queryJoin(data) {
  return request.post({
    url: "/api/group/join",
    data
  });
}

export function queryDakaList(data) {
  return request.post({
    url: "/api/group/joined/list",
    data,
    checkAuth: true
  });
}

export function queryDakaCount(data) {
  return request.post({
    url: "/api/daka/count",
    data,
    checkAuth: true
  });
}

export function queryDakaUgc(data) {
  return request.post({
    url: "/api/daka/ugc",
    data
  });
}

export function queryConCount(data) {
  return request.post({
    // url: '/api/group/continuousdakacount',
    url: "/api/group/dakaCount",
    data,
    checkAuth: true
  });
}

export function querySession(data) {
  return request.post({
    url: "/api/cq/wx/code2Session",
    loading: true,
    sleep: true, // 避免重复调用
    data
  });
}

export function getGroupQuery(data) {
  return request.post({
    url: "/api/group/query",
    data
  });
}

export function getMessageRed(data) {
  return request.post({
    url: "/api/message/red",
    data,
    checkAuth: true
  });
}

export function getMessageComment(data) {
  return request.post({
    url: "/api/message/comment/list",
    data
  });
}

export function getMessageThumb(data) {
  return request.post({
    url: "/api/message/thumb/list",
    data
  });
}

export function getUserInfo(data) {
  return request.post({
    url: "/api/cq/user/userInfo",
    data,
    checkAuth: true
  });
}

export function isLogin(data) {
  return request.post({
    url: "/api/cq/user/isLogin",
    data
  });
}

export function getBannerQuery() {
  return request.post({
    url: "/api/banner/query"
  });
}

export function getRankingCommunity(data) {
  return request.post({
    url: "/api/ranking/community",
    data
  });
}

export function getRankingGroup(data) {
  return request.post({
    url: "/api/ranking/group",
    data
  });
}

export function getReportType() {
  return request.post({
    url: "/api/daka/inform/type"
  });
}

export function updateReport(data) {
  return request.post({
    url: "/api/daka/inform",
    data
  });
}

export function updateFeedback(data) {
  return request.post({
    url: "/api/feedback/submit",
    data
  });
}

export function getShareImage(data) {
  return request.post({
    url: "/api/share/shareImage",
    data
  });
}

export function getGroupSetting(data) {
  return request.post({
    url: "/api/group/remind/get",
    loading: true,
    data: data
  });
}

export function setGroupSetting(data) {
  return request.post({
    url: "/api/group/remind/set",
    loading: true,
    data: data
  });
}

// 获取用户关注服务号的状态
export function getFollowStatus(data) {
  return request.post({
    url: "/api/wxsa/follow/get",
    loading: true,
    checkAuth: true,
    data: data
  });
}

export function getGroupUserList(data) {
  return request.post({
    url: "/api/daka/userList",
    data
  });
}

export function reportRemindUser(data) {
  return request.post({
    url: "/api/log/report",
    data
  });
}
// 每日首次登陆
export function reportTodayLogin(data = { taskType: 6 }) {
  return request.post({
    url: "/api/task/created",
    data,
    checkAuth: true,
    needToast: true
  });
}

// 每日首次登陆
export function getFinishedTasks(data) {
  return request.post({
    url: "/api/task/finishedTasks",
    data,
    checkAuth: true
  });
}

// 获取我的积分
export function getMyReward() {
  return request.post({
    url: "/api/reward/my",
    checkAuth: true
  });
}

// 获取当天剩余积分
export function getRemainReward() {
  return request.post({
    url: "/api/task/remainRewardPoint",
    checkAuth: true
  });
}

// 上报formId
export function reportFormId(data) {
  return request.post({
    url: "/api/message/wx/batchInsertFormId",
    data,
    reach: true,
    checkAuth: true
  });
}

// 查询小组集合页数据
export function getGatherGroupInfo(data) {
  return request.post({
    url: "/api/group/gather/get",
    data
  });
}
