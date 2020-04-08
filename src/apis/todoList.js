import request from '@/utils/request';

export function isLogin() {}

export function getAll() {
  return request.post({
    url: 'todos/all',
    needAuth: true,
  });
}
