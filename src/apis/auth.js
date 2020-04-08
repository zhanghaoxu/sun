import request from '@/utils/request';

export function isLogin() {}

export function register(data) {
  return request.post({
    url: 'auth/register',
    data,
  });
}

export function login(data) {
  return request.post({
    url: 'auth/login',
    data,
  });
}
