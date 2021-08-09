import MyRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'
import loaclCache from '@/utils/cache'

const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带 token 的拦截
      const token = loaclCache.getCache('token') // token 获取
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },

    requestInterceptorCatch: (err) => {
      return err
    },

    responseInterceptor: (res) => {
      return res
    },

    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default myRequest
