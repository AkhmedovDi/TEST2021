import axios from 'axios';

const baseURL = 'https://api.test2021.uz/';

const API = axios.create({
  baseURL,
  responseType: 'json',
});

export default API;
