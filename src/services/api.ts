import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(async (request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.authorization = token;
  }
  return request;
});
export default api;
