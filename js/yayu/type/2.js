//false | true
//primitive -> Boolean
// 构造函数 来用
console.log(Boolean())
console.log(NaN === NaN) //false 不代表确切值
// 不能通过===NaN 去判断，所有要isNaN 
console.log(isNaN(NaN), isNaN(parseInt("123")))