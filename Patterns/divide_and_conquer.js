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
    let counter = 0;
    while (left <= right) {
        let checker = Math.floor((right - left) / 2 + left)
        counter++;
        if (array[checker] === value) {
            console.log(counter);
            return checker;
        }
        else if (array[checker] < value) {
            left = checker + 1;
        }
        else {
            right = checker - 1;
        }
    }
    console.log(counter);
    
    return -1;
}



// console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)) // возвращает 3 
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 11)) // возвращает -1
console.log(binarySearch([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100
], 51));
