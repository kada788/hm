function sayHello() {
    var name = "wzy";
    return "Hello " + name;
}
console.log(sayHello());
// es5 全局作用域
var age = 10;
// 代码块
//块级作用域
if (age > 5) {
    // es6 新增的let 变量声明
    var name = "wzy";
    let dogYear = age * 7;
    console.log(dogYear);
}
//console.log(dogYear);
console.log(name);
