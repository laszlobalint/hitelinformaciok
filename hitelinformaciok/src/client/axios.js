import axios from 'axios';

import { DATABASE_URL } from '../shared/configuration';

const instance = axios.create({
  baseURL: DATABASE_URL,
});

export default instance;
