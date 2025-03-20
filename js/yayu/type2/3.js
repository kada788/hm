console.log(Object.prototype.toString.call({ a: 1 }))//[object Object]
console.log(({ a: 1 }).toString())//[object Object]
String({ a: 1 })// toString
console.log(String([1, 2]), '[1,2]')
console.log(JSON.stringify({ a: 1 }))
console.log((function () { var a = 1; }).toString())
console.log(String(new Date(2024, 12, 18)))