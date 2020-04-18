import axios from 'axios';

const axiosProvider = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true
  });

export default axiosProvider