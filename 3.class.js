// es6 继承

class Parent {
    constructor() {
        this.name = 'king';
    }
    static age() { // 静态方法将被继承到子类上，而不是实例
        return 24
    }
    sex = 'man' // 可以用babel 插件 transform-class-properties 进行编译
    eat() {
        console.log('eat');
    }
}

class Child extends Parent { // Child.prototype = Object.create(Parent.prototype)
    constructor() {
        super(); // Parent.call(this);
    }
}

let c = new Child();
c.eat();
console.log(c.name);
console.log(Child.age());
console.log(c.sex);