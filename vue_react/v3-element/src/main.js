import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
    ElButton,
    ElInput,
    ElForm,
    ElFormItem,
    ElContainer,
    ElHeader,
    ElMenu,
    ElMenuItem
} from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElButton).use(ElInput).use(ElForm).use(ElFormItem).use(ElContainer).use(ElHeader).use(ElMenu).use(ElMenuItem)
    .mount('#app')
