// Object.create

function create(parentPrototype) {
    var Fn = function(){}; // 用一个干净的空方法的创建
    Fn.prototype = parentPrototype;
    var fn = new Fn();
    fn.consturctor = Child;
    return fn;
}

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

// Object.setPrototypeOf(Child.prototype, Parent.prototype);

Child.prototype = create(Parent.prototype);

var c1 = new Child();
console.log(c1.name);
console.log(c1.age);
console.log(new Parent().__proto__ == Parent.prototype);
c1.eat();