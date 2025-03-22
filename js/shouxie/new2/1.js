function Person(name, age) {
    this.name = name;
    this.age = age;
    return null;

}
function MyNew(fn, ...args) {
    const obj = {};
    obj.__proto__ = fn.prototype;
    const result = fn.apply(obj, args);
    return typeof result === 'object' ? result : obj;


}
const person = MyNew(Person, 'John', 25);
console.log(person);