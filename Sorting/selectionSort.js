function selectionSort(arr) {
  // Перебираем первым циклом все числа и берем их как минимальные
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    // Вторым циклом ищем число меньше чем минимальное
    for (let k = i; k < arr.length; k++) {
      if (arr[k] < arr[min]) {
        // Если находим
        min = k;
      }
    }
    // То меняем числа местами
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  // Возвращаем массив
  return arr;
}

console.log(selectionSort([5, 8, 2, 7, 3]));
