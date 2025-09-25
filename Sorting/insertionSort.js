function insertionSort(arr) {
  // Перебираем все числа со 2
  for (let i = 1; i < arr.length; i++) {
    // Число
    let key = arr[i];
    // Индекс предыдущего числа
    let j = i - 1;
    // Пока число меньше предыдущего
    while (key < arr[j] && j >= 0) {
      // Меняем местами
      arr[j + 1] = arr[j];
      //   Меняем индекс предыдущего числа
      j--;
    }
    // Меняем местами
    arr[j + 1] = key;
  }
  // Возвращаем массив
  return arr;
}

console.log(insertionSort([6, 9, 2, 8, 3, 7]));
