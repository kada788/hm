import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
    ElButton,
    ElInput,
    ElForm,
    ElFormItem,

} from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router'
import { createPinia } from 'pinia'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElButton).use(ElInput).use(ElForm).use(ElFormItem)
    .mount('#app')
