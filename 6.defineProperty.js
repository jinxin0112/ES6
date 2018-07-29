// 给对象添加属性 
let obj = {};
Object.defineProperty(obj, 'name', {
    enumerable: true, // 是否可枚举
    //writable: true, // 是否可写
    configurable: false, // 能否被删除
    //value:'king'
    get() {
        return 'king'
    },
    set(newValue) {
        console.log(newValue);
    }
})

console.log(obj.name);
obj.name = 'gyh';
console.log(obj.name);