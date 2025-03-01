var a = 1;
var b = 4;
function foo() {
    //编译阶段 完成申明， undefined
    console.log(a, b);//undefine 4
    var a = 2;
    console.log(a);// 2
    var a = 3;
    function bar() {
        return a + b;
    }
    console.log(bar());//7
    console.log(a, b);// 3 4
}
foo();