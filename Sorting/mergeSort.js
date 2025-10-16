function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  // Перебираем циклом значения из обоих массивов
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(merge([10, 24, 73, 76], [5, 18, 34, 77]));

console.log(
  mergeSort([
    7, 2, 9, 21, 57, 31, 68, 42, 57, 32, 98, 12, 43, 18, 29, 1, 6, 8, 65, 45,
    34, 35, 87, 76, 73, 15, 26, 94, 50, 33, 80, 44, 39
  ])
);
