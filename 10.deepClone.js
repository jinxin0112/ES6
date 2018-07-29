let obj = { name: 'king', age: { value: 24 }, eat() { console.log('eat') } };
let arr = [1,2,3,4,5];
function deepClone(relativeObj) {
    if (typeof relativeObj === 'null') return null;
    if (typeof relativeObj !== 'object') return relativeObj;
    if (relativeObj instanceof Date) return new Date(relativeObj);
    if (relativeObj instanceof RegExp) return new RegExp(relativeObj);
    let cloneObj = new relativeObj.constructor(); // 兼容数组 
    for (var k in relativeObj) {
        cloneObj[k] = deepClone(relativeObj[k]);
    }
    return cloneObj
}
let cloneObj = deepClone(obj);
let cloneArr = deepClone(arr);
console.log(cloneObj);
console.log(cloneArr);