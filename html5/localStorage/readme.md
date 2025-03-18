# localStorage

- 以上哪些属于html5特性
  - <!DOCTYPE html> 文档类型 html5
  - <meta name="viewport" content="width=device-width, initial-scale=1.0">
    user-scalable = no 禁止缩放
    - 移动时代早期，PC页面为主，缩放页面
    - 不是个很好的体验， 一般也不需要了
    - 移动端为主，PC工作用
  - 表单 placeholder required 等改善功能

- js 性能
  - js DOM编程是最耗性能的一件事（查找和修改）
  - 不写DOM vue
  - this.quertySelector("") 缩小了查找范围
    dom， 还有任何父节点都可以 用querySelector
  - 性能优化是态度

- 代码风格
  - 事件处理函数 函数名占位
    代码可读性，函数名可读， 如果不这样， 就要看代码了 
  - es6 对象字面量， key:value 同名， 可以: +省略右面
  - 函数就应该专注一个功能，不过十行
    - 多拆分函数
    - 方便复用
    - 可读性更好 
    - 代码行数太多，不好

- html5 localStorage 
  - 为了记住网页的一些状态， 浏览器开辟了5MB左右的存储空间
  - localStorage  setItem getItem key value 存储
  - Json.stringify 把对象转成字符串， 存储到localStorage中 json.parse 把字符串转成对象 