// 手撸 babel 对 es6 类的实现

// 实例属性 公有属性 静态属性 描述器


function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('cannot call class as a function');
    }
}

var _createClass = function () {
    function defineProperty(target, props) {
        if (props.length > 0) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) {
                    descriptor.writable = true;
                }
                Object.defineProperty(target, props[i].key, descriptor);
            }
        }
    }
    return function (Constructor, protoProperties, staticProperties) {
        if (protoProperties) defineProperty(Constructor.prototype, protoProperties);
        if (staticProperties) defineProperty(Constructor, staticProperties);
        return Constructor;
    }
}()

function _inherits(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype,{constructor:{value:subClass}});
    subClass.__proto__ = superClass;
}

var Parent = (function () {
    function Parent() {
        // 首先进行判断，必要用new 来调用
        _classCallCheck(this, Parent);
        this.name = 'king';
    }
    _createClass(Parent, [{
        key: 'eat',
        value: function () {
            console.log('eat');
        }
    }],
        [{
            key: 'age',
            value: function () {
                return 24;
            }
        }
        ]);
    return Parent;
})()

var Child = (function(Parent){
    _inherits(Child,Parent);
    function Child() {
        _classCallCheck(this, Child);
        Parent.call(this);
    }
    return Child;
})(Parent)

let c = new Child();
c.eat();
console.log(Child.age());