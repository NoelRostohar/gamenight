import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.34.87:3000/api',
});

export default axiosInstance;
