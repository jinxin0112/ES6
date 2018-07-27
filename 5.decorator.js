// 修饰器

@myDecorator('king')
class Person {

    @readOnly PI = 3.1415926

    @decoratorMy
    my(){
        console.log('my run');
    }
}

function myDecorator(value) {
    return function (target) {
        target.prototype.myName = value
    }
}
function decoratorMy(target, key, descriptor){
    let fn = descriptor.value;
    descriptor.value = function(){
        console.log(key+'被修饰了');
        fn();
    }
}
function readOnly(target, key, descriptor){
    descriptor.writable = false
}
let p = new Person();
console.log(p.__proto__.myName);
p.my();
p.PI = 3;
console.log(p.PI);

// 多个修饰器修饰时为洋葱模型