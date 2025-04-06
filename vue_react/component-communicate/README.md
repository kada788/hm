- vue3 响应式
   - ref  .value 响应式对象 value Object.defineProperty  性能好
   - reactive   响应式代理  proxy 代理对象 开销大


- 父子组件通信
  - pros  父组件传递给子组件 数据
  - @child-message="handleEvent" 自定义事件名称+处理函数  attrs
  - 子组件 一切由外界传的 都得申明一下
  - emits = defineEmits(['child-message'])
  - emits(eventName, params)