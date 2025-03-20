# 显示类型转换和隐式类型转换
- String Number Boolean 函数运行 强制类型转换
- 构造函数 new 

- Primitive  怎么转对象

- 对象转Primitive类型
    
- 包装类
   "abc".length
   "1.23".toFixed(1)
    JS 一切面向对象，会自动帮我们包装一下简单数据类型
    叫做包装类

 - 对象转Primitive  Object => Primitive
   - Boolean
   - String
     toString() 
     - Object.prototype.toString.call({a:1})   "[object Object] "
     确切类型
     - 数组，调用原型上的toString方法
     - 函数 返回源代码
     - 日期  

   - Number               



   - Object => Primitive 
     - String
       - 先valueOf方法，如果是原始值，返回。
       - 否则，调用toString方法，返回一个原始值
       - 否则 抛出异常 TypeError: Cannot convert object to primitive value

    - Object => String|Number
      - toPrimitive 是使命
      - toString() 
      - valueOf()
      - Number 先valueOf 再toString
      - String 先toString 再valueOf
        也在情理之中
      - 报错