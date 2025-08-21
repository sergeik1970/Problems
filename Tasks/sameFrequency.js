// Напишите функцию под названием sameFrequency. 

// Даны два положительных целых числа, определите, 

// имеют ли эти два числа одинаковую частоту цифр.

function sameFrequency(num1, num2){
    arr1 = num1.toString().split('')
    arr2 = num2.toString().split('')
    if (arr1.length !== arr2.length) {
        return false;
    }

    let obj = {}
    for (let i = 0; i < arr1.length; i++) {
        let symbol = arr1[i];
        obj[symbol] = (obj[symbol] || 0) + 1;
    }
    for (let i = 0; i < arr1.length; i++) {
        let symbol = arr2[i];
        if (!(obj[symbol])) {
            return false;
        }
    }
    return true;
    
}

console.log(sameFrequency(182,281)) // true

console.log(sameFrequency(34,14)) // false

console.log(sameFrequency(3589578, 5879385)) // true

console.log(sameFrequency(22,222)) // false