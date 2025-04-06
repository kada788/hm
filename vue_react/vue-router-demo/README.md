# vue 全家桶之 vue-router 路由

- vue 语法 组件(vue2选项式 / vue3组合式 大型项目 200行) 响应式  生命周期 指令（v-bind v-model v-for v-if v-show）、 三种数据（自有数据 ref、pros、computed）
- vue-router 路由  vue 周边生态
  - 跳转到其他页面 路由
- vuex/pinia 状态管理

## vue-router
- 将接管路由，像交警一样
- router-link  取代a标签
  a标签  
  router-link  组件包含a的功能，路由对应的组件显示到相应位置
  要启用
  组件没有生效 无法识别的组件 -> div 元素
  - 向vue 添加vue-router

- router 专门的目录
  - index.js  入口文件
  - router.js  路由配置文件
  - router-view  路由视图  路由对应的组件显示到相应位置
  - router-link  路由链接  取代a标签
  - 路由的配置
    - 路由的配置项
      - path  路径
      - name  名称
      - component  组件

- 业务熟练度
  - vue-router  语法细节
    - routes 拆分 亮点  
      [
        /
        / About  顶级路径
        ...users //用户模块
        ...posts // 文章模块
      ]
      展开运算符
    - path,component
     - name 有用
     - props 路由传参 

- 路由历史记录 history
   router-link 而不是a 组件
   router.push() 入栈
   栈顶是当前的路由，显示当前组件 
   前进，后退
   导航 = url + history navigator

- 实战开发
  - sytlus
    加速css开发
    npm i -D stylus stylus 当前项目安装 stylus 包
    省略{} :; 用tab 缩进代替