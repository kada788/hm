- 如何开发一个vue项目
  - vite 工程化
    npm init vite

  - vue 核心语法 (响应式、组件化、指令等)
    前端框架
  - vue-router
  - pinia
  - element3 UI 组件库
  - stylus
  - axios  ajax 请求封装库 

  - app.use
    向vue app 中注册插件 
    element3 提供的组件可以全局使用
    - 注意问题 性能
      首页打开就会变慢， 按需加载
    - element3 组件 以el-开头
    -  不要重复造轮子  70% 常见组件需求


## 项目亮点
- 项目全面使用es6+ 风格
  代码简洁  易读 易维护
- 按需加载vue 组件库element3，有利于性能优化,页面加载速度
- 路由
  - 多级路由
    二级路由 path 前面不要 /
  - path component name  meta






- 表单组件
  - 看文档 
  - :model 收集表单数据
  - ref 获取表单实例
    -  有时候要获取DOM元素, 组件对象
    -  调用相应的方法
    -  template 用ref 标记DOM | 组件
    -  const formRef = ref(null)  挂载前就为null
    -  挂载后就拿到了   
  - 表单的校验
       - rules
       - items prop     
       - valid  方法   boolean 

- 



- 登录流程
  - 前端提交登录
   - login.vue 组件化表单
   - 调用 api/ login 接口
    - 项目多了一层 api 目录会管理应用的所有接口
    - 接口好管理，统一维护
    - 和组件解耦
   - 统一配置的axios 实例 发送请求


