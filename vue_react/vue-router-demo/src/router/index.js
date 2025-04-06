// 路由配置文件
import {
    createRouter,// 创建路由实例 
    createWebHashHistory //路由模式
} from 'vue-router' //插件
//页面级别组件放到views文件夹中
import Home from '../views/Home.vue' //组件
import About from '../views/About.vue' //组件
//posts 模块划分
import PostIndex from '../views/post/index/post-index.vue' //组件
import PostShow from '../views/post/show/post-show.vue' //组件
import postMeta from '../views/post/show/components/post-meta.vue'
const postRoues = [
    {
        path: '/posts',
        name: 'posts',
        component: PostIndex,
        // 路由向页面级别组件传参
        props: {
            sort: 'popular'
        },
        meta: {
            title: '文章列表'
        }
    },
    {
        path: '/posts/:postId', // 动态路由
        component: PostShow,
        name: 'postShow',
        props: true, // 开启props传参
        // 子路由,路由的嵌套 
        children: [
            {
                path: 'meta',
                component: postMeta
            }
        ]
    }
]

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        meta: {
            requireAuth: true,
            title: '关于'
        },// 
        name: 'about',// 路由名称
        component: About
    },
    ...postRoues

]
// 路由实例
const router = createRouter({
    history: createWebHashHistory(), //路由模式
    routes // 路由配置数组
})
// 路由守卫
// 每次路由的切换都会执行这个回调
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '智谱华章'
    // to 目标路由对象
    // from 离开的路由对象
    // router + routes构成路由
    console.log(to, from, '--------------')
    if (to.meta.requireAuth) {
        alert('需要登录')
        // next('/login');
    }
    next()

})
export default router
