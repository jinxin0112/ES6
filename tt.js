'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Person = (_dec = myDecorator('king'), _dec(_class = (_class2 = function () {
    function Person() {
        _classCallCheck(this, Person);

        _initDefineProp(this, 'PI', _descriptor, this);
    }

    _createClass(Person, [{
        key: 'my',
        value: function my() {
            console.log('my run');
        }
    }]);

    return Person;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'PI', [readOnly], {
    enumerable: true,
    initializer: function initializer() {
        return 3.1415926;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'my', [decoratorMy], Object.getOwnPropertyDescriptor(_class2.prototype, 'my'), _class2.prototype)), _class2)) || _class);


function myDecorator(value) {
    return function (target) {
        target.prototype.myName = value;
    };
}
function decoratorMy(target, key, descriptor) {
    var fn = descriptor.value;
    descriptor.value = function () {
        console.log(key + '被修饰了');
        fn();
    };
}
function readOnly(target, key, descriptor) {
    descriptor.writable = false;
}
var p = new Person();
console.log(p.__proto__.myName);
p.my();
p.PI = 3;
console.log(p.PI);

// 多个修饰器修饰时为洋葱模型
