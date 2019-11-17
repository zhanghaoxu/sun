import request from "utils/request";

/**
 * 获取群聊图片门槛信息
 */
export function chatInfo(groupId) {
  return request.post({
    url: "/api/group/talk/info",
    checkAuth: true,
    data: { groupId }
  });
}

/**
 * 上传群聊图片
 * @param {*} data
 */
export function uploadTalk(data) {
  return request.post({
    url: "/api/group/talk/upload",
    data
  });
}
