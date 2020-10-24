import axios from 'axios';

import { DATABASE_URL } from '../shared/configuration';

let instance = axios.create({
  baseURL: DATABASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token && `Bearer ${token}`;

  return config;
});

export default instance;
