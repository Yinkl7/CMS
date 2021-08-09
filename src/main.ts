import { createApp } from 'vue'
// 全局引入组建库和样式
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import { globalRegister } from './global'

import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupstore } from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(globalRegister)
// app.use(ElementPlus)
setupstore()
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)

// myRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('自身的请求拦截')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('自身响应拦截')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// myRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
