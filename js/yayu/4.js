////////
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    eat: function () {
        console.log(`${this.name}爱吃饭`);
    }
}
const wang = new Person('小王', 18);
wang.eat();