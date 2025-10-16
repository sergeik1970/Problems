function search(nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  console.log(`левый = 0, правый = ${right}`);

  while (left <= right) {
    console.log(`Зашли в цикл`);

    let mid = Math.floor((right - left) / 2 + left);
    console.log(`Середина ${mid}`);

    if (target === nums[mid]) {
      return mid;
    }

    // Если левая часть отсортирована, то проверяем, может ли она содержать target, если может, то идем в левую,
    // если не содержит, идем в правую
    else if (nums[left] <= nums[mid]) {
      // Левая часть отсортирована
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
        console.log(
          `левая отсортирована, target может лежать в левой части, теперь right = ${right}`
        );
      } else {
        left = mid + 1;
        console.log(
          `target нет в левой, он может лежать в правой части, теперь left = ${left}`
        );
      }
    }
    // Если левая часть не отсортирована, то правая часть отсортирована, и тогда проверяем правую часть ан содержание target,
    // если он может быть, то идем в правую, если не может, то в левую
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
        console.log(
          `правая отсортирована и таргет в ней может быть, идем вправо, теперь left = ${left}`
        );
      } else {
        right = mid - 1;
        console.log(
          `target нет в правой, он может быть в левой части, теперь right = ${right}`
        );
      }
    }
  }
  // Если не нашли то -1
  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([1, 2, 3, 4, 5, 7, 0], 4));
