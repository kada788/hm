# 跨域

-  运行环境
  - 前端
    v8 引擎在浏览器
  - 后端
    node  封装了 v8 引擎， 剥离了html, 借助c++ 调用系统服务
    http 模块 就是node 实现的


  - 为什么node 有模块化需求
    - 引入各种模块
    - 后端功能复杂



  - CORS policy
    - 安全策略
    - baidu   -> google (不受信任) 不同的域名
    - 


 - 保护谁
   - 后端， 制定规则
     目前没有bolck
   - 来自于前端
     JS 限制跨域与请求
     JS dom 修改页面的  跨域内容受限制

 - Cross-Origin Resource Sharing (CORS)
   Origin 


   - 换条路走
    - script + src
      - 不受CORS 限制
    - http 请求  将后端api 接口资源拿到
       - src = api url
    -  json 给我


-  script  阻塞式加载并执行
-  jsonp
   json with padding(函数)
   - 前端需要script 标签  src 执行api url
   - 页面上埋下一个全局方法 window.callback
   - 需要后端的配合 数据外面包 函数
 - 封装一个jsonp 函数
   - url + callback
   - dom script 挂载 和 window[callback] = callback