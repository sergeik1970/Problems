// Напишите функцию под названием maxSubarraySum, 
// которая принимает массив целых чисел и число n. 
// Функция должна вычислить максимальную сумму 
// n последовательных элементов в массиве.



// Примеры использования функции:
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 2], 2) // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5, 2], 4) // 17
// maxSubarraySum([4, 2, 1, 6, 1], 2) // 6
// maxSubarraySum([1, 4, 2, 2, 4], 5) // 13
// maxSubarraySum([1, 4], 0) // null

function maxSubarraySum(arr, num) {
    let max = 0;
    for (let i = 0; i + num <= arr.length; i++) {
        let temp = 0;
        for (let k = 0; k < num; k++) {
            temp += arr[i+k]
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

function maxSubarraySum2(arr,num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum = arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5, 2], 2)) // 10
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5, 2], 4)) // 17
console.log(maxSubarraySum2([4, 2, 1, 6, 1], 2)) // 6
console.log(maxSubarraySum2([1, 4, 2, 2, 4], 5)) // 13
console.log(maxSubarraySum2([1, 4], 0)) // null