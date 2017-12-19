import http from 'axios';

export function createUser(params) {
  return http.post('/api/user/create', params);
}
