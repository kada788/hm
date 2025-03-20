// 只要不是数字， +连接符
//只有简单数据类型才能做拼接
console.log([] + [])//使用toString方法 二元运算符
// 一元运算符 隐式类型转换
console.log(+[1, 2, 3])//先用valueOf方法 转换不了primitive 再用toString方法 转换为字符串（"1,2,3"）,再用Number方法=NaN

console.log([] == [])//代表不同的空间，地址不同，false

let x = 42;
let y = {
    valueOf: function () {
        return 42
    }
}

console.log(x == y)//true