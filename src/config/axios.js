import axios from 'axios'

import store from '../store'

// attach the token if found in store
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

axiosInstance.interceptors.request.use(
  config => {
    const token = store.getters['auth/getToken']
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
