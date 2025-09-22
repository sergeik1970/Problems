// Сортировка методом пузырька
function bubbleSort(arr) {
  // Счетчик количества проверок
  let counter2 = 0;
  //   Сколько раз проверить массив
  for (let k = 0; k < arr.length - counter2; k++) {
    // Добавляем проверку
    counter2++;
    // Если есть замены то меняется на true
    let noSwap = true;
    // Цикл для проверки
    for (let i = 0; i < arr.length; i++) {
      //   Если первое больше второго - поменять
      if (arr[i] > arr[i + 1]) {
        // Замена есть
        noSwap = false;
        let a = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = a;
      }
    }
    // Если нет замен - перестать проверять
    if (noSwap) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([5, 4, 1, 0, 3])); // 3

console.log(bubbleSort([5, 4, 1, 0, 3, 9, 10, 17, 13, 7, 9])); // 6

console.log(bubbleSort([0, 1, 3, 4, 5, 7, 9, 9, 10, 13, 17])); // 1

arr = [5, 4, 1, 0, 3, 9, 10, 17, 13, 7, 9]
console.time("task")
console.log(bubbleSort(arr))
console.timeEnd("task")

console.time("task2")
console.log(arr.sort((a, b) => a - b))
console.timeEnd("task2")