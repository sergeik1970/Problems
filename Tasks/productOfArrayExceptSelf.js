// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed
//  to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and
// without using the division operation.

function multiply(arr) {
  let resArr = [];
  let counter = 1;
  let zeroCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        // Счетчик умножения чисел
      counter = counter * arr[i];
    } else {
        // Счетчик нулей
      zeroCounter += 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let value = 0;
    // Если нет нолей
    if (zeroCounter === 0) {
    // То все хорошо делится
      value = counter / arr[i];
    //   Если один ноль
    } else if (zeroCounter === 1) {
        // И именно он в arr[i]
      if (arr[i] === 0) {
        // То умноженные числа без него
        value = counter;
      } else {
        // А если это не ноль, то все число обнуляется из-за него
        value = 0;
      }
    }
    // Добавляем в массив
    resArr.push(value);
  }
  return resArr;
}

console.log(multiply([1, 2, 3, 4]));

console.log(multiply([-1, 1, 0, -3, 3]));

console.log(multiply([1, 2, 3, 4, 0, 0]));
