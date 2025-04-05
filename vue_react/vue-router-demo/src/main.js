import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'// 路由对象
//自动导入index.js

createApp(App)
    // app  use 方法
    .use(router)
    .mount('#app')
