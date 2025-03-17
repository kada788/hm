function Person(name, age) {
    this.name = name;
    this.age = age;

}
function MyNew() {
    const obj = new Object();
    const constructor = Array.prototype.shift.call(arguments);
    obj.__proto__ = constructor.prototype;
    const result = constructor.apply(obj, arguments);
    return typeof obj === 'object' ? result : obj;


}
const person = MyNew(Person, 'John', 25);
console.log(person.name);
console.log(person.age);