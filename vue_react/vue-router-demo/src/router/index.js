// 路由配置文件
import {
    createRouter,// 创建路由实例 
    createWebHashHistory //路由模式
} from 'vue-router' //插件
//页面级别组件放到views文件夹中
import Home from '../views/Home.vue' //组件
import About from '../views/About.vue' //组件
import PostIndex from '../views/post/index/post-index.vue' //组件
import PostShow from '../views/post/show/post-show.vue' //组件
// 路由配置
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts',
        component: PostIndex
    },
    {
        path: '/posts/:postId',
        component: PostShow
    }
]
// 路由实例
const router = createRouter({
    history: createWebHashHistory(), //路由模式
    routes // 路由配置数组
})

export default router
