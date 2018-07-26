let a = new Set([]);
console.log(a);

let b = new Set([1, 2, 2, 3, 5, 5]);
console.log(b);

// 数组去重
let arr = [1, 2, 2, 3, 5, 5];
arr = [...new Set(arr)];
console.log(arr);

// 并集
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]
}
console.log(union(arr1, arr2));

// 交集
function intersection(arr1, arr2) {
    return arr1.filter(item => new Set(arr2).has(item))
}
console.log(intersection(arr1, arr2));

// 差集
function difference(arr1, arr2){
    return arr1.filter(item => !new Set(arr2).has(item))
}
console.log(difference(arr1, arr2));