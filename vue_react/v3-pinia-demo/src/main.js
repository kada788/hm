import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
// 大型项目
// pinia 的实例  vue 全家桶中的store
const pinia = createPinia();

app
    .use(pinia)
    .mount('#app')
