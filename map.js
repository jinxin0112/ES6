let book = new Map();
book.set('js', 'node');
console.log(book.get('js'));
book.set('js', 'react');
console.log(book.get('js'));
book.set('html', { name: 'html5' });
console.log(book);

// 遍历

// forEach
book.forEach((value, key) => {
    console.log(key + '=' + value);
});

// of 遍历数组的值，in 遍历数组的键 ;of 遍历对象的值,in 不能遍历对象 
let arr = [1, 2, 3, 4, 5,]
let obj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5
}
for (let k of arr) {
    console.log(k);
}
for (let k in obj) {
    console.log(k);
}
// set 和 map 的entry 都为数组
for (let [key, value] of book.entries()) {
    console.log(key + '=' + value);
}

// es5对象遍历
console.log(Object.keys({ 'name': 'king', 'age': 24 }));
console.log(Object.values({ 'name': 'king', 'age': 24 }));