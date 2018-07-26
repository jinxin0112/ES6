'use strict';

var _createClass = function () { 
    function defineProperties(target, props) { 
        for (var i = 0; i < props.length; i++) {
     var descriptor = props[i]; 
     descriptor.enumerable = descriptor.enumerable || false; 
     descriptor.configurable = true; 
     if ("value" in descriptor) descriptor.writable = true; 
     Object.defineProperty(target, descriptor.key, descriptor);
     } } 
     return function (Constructor, protoProps, staticProps) { 
         if (protoProps) defineProperties(Constructor.prototype, protoProps); 
         if (staticProps) defineProperties(Constructor, staticProps); 
         return Constructor; }; 
    }();

function _possibleConstructorReturn(self, call) { 
    if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } 
    return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { 
    if (typeof superClass !== "function" && superClass !== null) { 
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); 
    } 
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
     if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// es6 继承

var Parent = function () {
    function Parent() {
        _classCallCheck(this, Parent);

        this.sex = 'man';

        this.name = 'king';
    }

    _createClass(Parent, [{
        key: 'eat',
        value: function eat() {
            console.log('eat');
        }
    }], [{
        key: 'age',
        value: function age() {
            // 静态方法将被继承到子类上，而不是实例
            return 24;
        }
    }]);

    return Parent;
}();

var Child = function (_Parent) {
    _inherits(Child, _Parent);

    // Child.prototype = Object.create(Parent.prototype)
    function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this)); // Parent.call(this);
    }

    return Child;
}(Parent);

var c = new Child();
c.eat();
console.log(c.name);
console.log(Child.age());
console.log(c.sex);
