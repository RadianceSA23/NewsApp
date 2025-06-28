import axios from 'axios';
import { NEWS_API_KEY } from '@env';

const api = axios.create({
  baseURL: 'https://newsdata.io/api/1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Add request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`🔼 ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    console.log('Params:', config.params);

    // Automatically add apikey if missing
    if (!config.params) {
      config.params = {};
    }
    config.params.apikey = NEWS_API_KEY;

    return config;
  },
  (error) => {
    console.log('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// ✅ Add response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`✅ ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    const res = error.response;
    if (res) {
      console.log(`❌ Error ${res.status} on ${res.config.url}`);
      console.log('Data:', res.data);
    } else {
      console.log('❌ Network error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
