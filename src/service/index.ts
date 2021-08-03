import MyRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带 token 的拦截
      const token = '' // token 获取
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求拦截')
      return config
    },

    requestInterceptorCatch: (err) => {
      return err
    },

    responseInterceptor: (res) => {
      console.log('相应拦截')
      return res
    },

    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default myRequest
