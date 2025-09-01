// Напишите рекурсивную функцию с именем flatten,
// которая принимает массив массивов и возвращает
// новый массив со всеми значениями в "плоском" виде (без вложенных массивов).

// Примеры

// flatten([1,2,3,[4,5]]) // [1,2,3,4,5]
// flatten([1, [2,3,4], [[[[5]]]]]) // [1,2,3,4,5]

// Как проверить что что-то является массивом

function flatten(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    isArr = Array.isArray(arr[i]);
    if (!isArr) {
      res.push(arr[i]);
    } else {
      res = res.concat(flatten(arr[i]));
    }
  }
  return res;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1,2,3,4,5]
console.log(flatten([1, [2,3,4], [[[[5]]]]])) // [1,2,3,4,5]
