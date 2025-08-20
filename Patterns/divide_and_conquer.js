// Дано отсортированный массив целых чисел, напишите функцию под названием binarySearch, 
// которая принимает значение и возвращает индекс, по которому находится переданное 
// значение. Если значение не найдено, верните -1.

// Примеры вызова функции:

function binarySearchLazy(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let checker = Math.floor((right - left) / 2 + left)
        
        if (array[checker] === value) {
            return checker;
        }
        else if (array[checker] < value) {
            left = checker + 1;
        }
        else {
            right = checker - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)) // возвращает 3 
console.log(binarySearch([1, 2, 3, 4, 5, 6], 11)) // возвращает -1