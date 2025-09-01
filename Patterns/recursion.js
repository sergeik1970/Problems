function countDown(num) {
    // Условие выхода из рекурсии
    if (num <= 0) {
        console.log("Пуск!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);

}

console.log(countDown(3))

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1)
}

console.log(sumRange(7));
console.log(7 + sumRange(6));
console.log(7 + 6 + sumRange(5));
console.log(7 + 6 + 5 + sumRange(4));
console.log(7 + 6 + 5 + 4 + sumRange(3));
console.log(7 + 6 + 5 + 4 + 3 + sumRange(2));
console.log(7 + 6 + 5 + 4 + 3 + 2 + sumRange(1));

console.log(sumRange(100));


function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    return newArr.concat(collectOddValues(arr.slice(1)));
}

console.log(collectOddValues([1,2,3,4,5]));
