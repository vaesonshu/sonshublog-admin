import { createApp } from 'vue'
import App from './App.vue'
import { registerApp } from './global/index'
import router from './router'
import store from './store'
const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')
