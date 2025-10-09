74;

function searchMatrix(matrix, target) {
  // Если пустая матрица
  if (!Array.isArray(matrix) || matrix.length === 0 || matrix[0].length === 0)
    return false;

  //    Начало и конец
  let start = 0;
  let end = matrix.length - 1;

  while (start <= end) {
    // Середина, окно матрицы, последний элемент окна матрицы
    let mid = Math.floor((end - start) / 2) + start;
    let midWindow = matrix[mid];
    let midWindowLast = midWindow.length - 1;

    console.log(`Начало ${start}, конец ${end}`);
    console.log(`Середина ${mid}`);
    console.log(`Длина окна ${midWindow} равна ${midWindowLast}`);

    // Если число может быть в блоке
    if (midWindow[0] <= target && midWindow[midWindowLast] >= target) {
      console.log(`Число в блоке ${mid}, ${midWindow}`);

      // Ищем число
      for (let i = 0; i < midWindow.length; i++) {
        console.log(`Проверяем число ${midWindow[i]}`);

        // Если попали
        if (midWindow[i] === target) {
          return true;
        }
      }
      // Если в блоке числа не оказалось
      return false;
    }
    // Если число больше
    else if (midWindow[midWindowLast] < target) {
      console.log(`Число больше чем последнее число этого окна ${midWindow}`);
      start = mid + 1;
    }
    // Если число меньше
    else {
      console.log(`Число меньше чем первое число этого окна ${midWindow}`);
      end = mid - 1;
    }
  }
  // Если ничего, то нет такого числа
  return false;
}

console.log(
  searchMatrix(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    10
  )
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);

console.log(searchMatrix([[1]], 2));
