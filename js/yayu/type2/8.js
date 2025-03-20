console.log(1 + '1')//11
console.log(+"1")//1
console.log(+[])// 0????????????
console.log(+['1'])//1
console.log(+{})//NaN
console.log([] + {})//[object Object]
console.log(42 + ['42'])//左边是数值，右边是对象转换成primitive类型，再转换成数值
console.log(true == '2')//当一方是boolean类型时，会转换成数值
console.log(1 == "2")


