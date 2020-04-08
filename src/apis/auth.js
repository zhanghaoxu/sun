import request from '@/utils/request';

export function isLogin() {
  return request.post({
    url: 'auth/isLogin',
    needAuth: true,
  });
}

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
