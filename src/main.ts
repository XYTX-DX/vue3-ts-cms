import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'

import dxRequest from './service'

// import './service/axios_demo'

// createApp(App).use(router).use(store).mount('#app')
const app = createApp(App)
// globalRegister(app)
// 注册element-plus
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

dxRequest.request({
  url: '/home/multidata',
  method: 'get'
})
