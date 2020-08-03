import request from '@/utils/request';

export function getAll() {
  return request.post({
    url: '/todos/all',
    needAuth: true,
  });
}

export function getFinish() {
  return request.post({
    url: '/todos/finished',
    needAuth: true,
  });
}

export function getUnFinish() {
  return request.post({
    url: '/todos/unFinished',
    needAuth: true,
  });
}

export function add(data) {
  return request.post({
    url: '/todos/add',
    needAuth: true,
    data,
  });
}
