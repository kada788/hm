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