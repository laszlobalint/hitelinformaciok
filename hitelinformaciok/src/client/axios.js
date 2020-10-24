import axios from 'axios';

import { DATABASE_URL } from '../shared/configuration';

const instance = axios.create({
  baseURL: DATABASE_URL,
});

const token = localStorage.getItem('token');
config.headers.Authorization = token && `Bearer ${token}`;

export default instance;
