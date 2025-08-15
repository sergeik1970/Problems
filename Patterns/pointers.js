// Напишите функцию под названием sumZero,
// которая принимает отсортированный массив целых чисел.
// Функция должна найти первую пару, сумма которой равна 0.
// Верните массив, который включает оба значения,
// сумма которых равна нулю, или undefined, если такая пара не существует.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

// Напишите функцию под названием countUniqueValues,
// которая принимает отсортированный массив целых чисел.
// и считает количество уникальных значений в этом массиве.

function countUniqueValues(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      counter += 1;
    }
  }
  return counter;
}

console.log(countUniqueValues([1, 1, 3, 4, 4, 6, 7, 8, 8, 8]));

// Напишите функцию под названием threeSum,
// которая принимает отсортированный массив целых чисел.
// Функция должна найти первую тройку, сумма которой равна 0.
// Верните массив, который включает три значения,
// сумма которых равна нулю, или undefined, если такая пара не существует.

function threeSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = element + arr[left] + arr[right];
      if (sum === 0) {
        return [element, arr[left], arr[right]];
      } 
      else if (sum > 0) {
        right--;
      } 
      else {
        left++;
      }
    }
  }
  return undefined;
}

console.log(threeSum([-4, -2, -1, 1, 2, 3, 4])); // [-4, 1, 3]

console.log(threeSum([-4, -2, -1, 0, 1, 2, 3, 4])); // [-4, 0, 4]

console.log(threeSum([-9, -8, -3, -2, -1, 0, 1, 2, 3, 4])); // [-3, -1, 4]


console.log(threeSum([-4, -2, -1, 1])); // underfined