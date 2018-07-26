// es5 继承

function Parent(name) {
    this.name = { name: name }; // 实例属性,不同实例不相同
    this.age = 19;
}

Parent.prototype.eat = function () { // 公有属性，不同实例相同
    console.log('eat');
}

var p1 = new Parent('king');
var p2 = new Parent('king');

console.log(p1.name === p2.name);

function Child() {
    Parent.call(this,'gyh');
}

// 继承1
// Child.prototype.__proto__  = Parent.prototype; 
// 继承2 es6
Object.setPrototypeOf(Child.prototype, Parent.prototype);
// 继承3 继承了多余的实例属性 没人用
// Child.prototype = new Parent();
var c1 = new Child();
console.log(c1.name);
console.log(c1.age);
console.log(new Parent().__proto__ == Parent.prototype);
c1.eat();