# js 数据类型

- js有多少种数据类型？
  - 简单数据类型
   number string boolean null undefined symbol bigint
   依据变量内存的分配机制 栈内存，复杂数据类型的栈里存的是指向堆内存的地址
  
  
   function example() {
    let num = 10; // 简单数据类型，值存储在栈内存，变量定义在词法环境中
    var str = 'hello'; // 简单数据类型，值存储在栈内存，变量定义在变量环境中
}
example();


function example() {
    let obj = { name: 'John' }; // 复杂数据类型，地址存储在栈内存，对象数据存储在堆内存，变量定义在词法环境中
    var arr = [1, 2, 3]; // 复杂数据类型，地址存储在栈内存，数组数据存储在堆内存，变量定义在变量环境中
}
example();


  - 复杂数据类型
    object
 
  - null?
    null 表示一个空值或不存在的对象，是一个可以赋给变量的特殊值