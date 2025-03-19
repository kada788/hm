# js类型转换

- es6 之前， js有多少种类型?6种
  - 简单数据类型，primitive，  拷贝式赋值
   - String
   - Number
   - Boolean
   - Null
   - Undefined
  - 复杂数据类型， 引用式赋值
    - Object
-  为何JS 类型会改变

   - js 是弱类型语言
   - 变量的类型是可以改变的
   - 搞清楚变量的确切类型
      - primitive类型 -> 其他类型的转换
      - Object类型 -> 其他类型的转换

  -  Boolean 显示类型转换（构造函数）规则 Boolean()
   - false 的情况
    - 为空 false
    - false
    - undefined
    - null
    - NaN
    - +0
    - -0
    - ''
   - true
  - +0 -0
    Object.is()  ===
    1/+0, 1/-0 Infinity  -Infinity
  - NaN
    类型任然是Number, 表示一个特殊的数字

  - Number()
   0 1 NaN