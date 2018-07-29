let arr = [1, 2, 3];
let arr1 = [4, 5, 6];
console.log(arr1.join(arr));

console.log(eval(arr.join('+')));

// var obj = {
//     0:1,
//     1:2,
//     2:3,
//     length:3
// }
// console.log([...obj]);

let [a, b, c] = arr;
let obj = { name: 'king', age: 24 };
let { name, age } = obj;
console.log(name);
console.log(a, b, c);

let s1 = Symbol.for('king');
let s2 = 'name';
let s3 = 'Symbol(Symbol.iterator)';
let s4 = 'Symbol(Symbol.iterator)';
// ... 需要迭代器
let arr2 = [...{
    0: 1,
    1: 2,
    2: 3,
    length: 3,
    [Symbol.iterator]: function *() {
        let index = 0;
        while (index != this.length) {
            yield this[index++];
        }
    }
}]
console.log(arr2);

// Array.from 不需要迭代器
let arr3 = Array.from({ 
    0: 1,
    1: 2,
    2: 3,
    length: 3
})
console.log(arr3);