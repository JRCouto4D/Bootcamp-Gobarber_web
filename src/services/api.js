import axios from 'axios';

const api = axios.create({
  baseURL: 'https://skytooll.com',
});

export default api;
