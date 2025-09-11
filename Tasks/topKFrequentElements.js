// Given an integer array nums and an integer k,
// return the k most frequent elements.
// You may return the answer in any order.

function topKFrequent(nums, k) {
  let table = {};
  //   Создаем хэш таблицу
  for (let num of nums) {
    table[num] = (table[num] || 0) + 1;
  }
  //   Переделываем ее в массив типа ["число": "сколько раз встретилось"]
  let arr = Object.entries(table);
  //   Сортируем массив по количеству повторений по убыванию
  let sortArr = arr.sort((a, b) => b[1] - a[1]); 
  //   Отделяем первые k элементов массива
  let firstKElements = sortArr.slice(0, k);
  //   Получаем первые k чисел из массива
  let getfirstKElements = firstKElements.map((item) => Number(item[0]));
  return getfirstKElements;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)); // [1,2]
console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3], 2)); // [1,3]
console.log(
  topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4], 3)
); // [1, 3, 4]
