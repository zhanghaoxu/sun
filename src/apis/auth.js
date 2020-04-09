import request from '@/utils/request';

export function isLogin() {
  return request.post({
    url: '/auth/isLogin',
    needAuth: true,
  });
}

export function register(data) {
  return request.post({
    url: '/auth/register',
    loading: true,
    data,
  });
}

export function login(data) {
  return request.post({
    url: '/auth/login',
    loading: true,
    data,
  });
}
