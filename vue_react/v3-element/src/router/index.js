import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue'),
        meta: {
            title: '关于',
            requireLogin: true
        },
        children: [
            {
                path: 'about',
                name: 'About',
                conponent: () => import('../pages/About.vue'),
            }
        ]
    },
    {
        path: '/login',
        component: () => import('../pages/Login.vue'),
        name: 'login',
        meta: {
            title: '登录',
            requireLogin: false
        }
    }


]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)


export default router