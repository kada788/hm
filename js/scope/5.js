function foo(a) {
    var b = a;
    return a + b;
}
var c = foo(2);
//3次LHS查询， 4次RHS查询