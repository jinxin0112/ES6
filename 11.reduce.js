// Array.reduce


Array.prototype.myReduce = function (fn, start) {
    let prev = start || this[0];
    for (let i = 0; i < this.length; i++) {
        prev = fn(prev, this[i], i, this);
    }
    return prev
}

let buy = [
    {
        count: 2,
        price: 20
    },
    {
        count: 3,
        price: 3
    },
    {
        count: 1,
        price: 2
    }
]

let total = buy.reduce((prev, cur, curIndex, arr) => {
    return prev + cur.count * cur.price
}, 0);
console.log(total);