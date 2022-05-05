import axios from 'axios';

const host = 'http://localhost:8080/api';

export const instance = axios.create({
  baseURL: `${host}`,
});
