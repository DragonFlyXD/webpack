import axios from 'axios'
import config from './config'

let api = axios.create(config)

// http request 拦截器
api.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http response 拦截器
api.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default api
