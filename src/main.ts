import { createApp } from 'vue'
import App from './App.vue'
import { registerApp } from './global/index'
import router from './router'
import store from './store'
import ssRequest from './service'
const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

ssRequest.request({
  url: '/sentences',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      // const token = '123'
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }
      return config
    },
    responseInterceptor: (res) => {
      return res
    }
  }
})
