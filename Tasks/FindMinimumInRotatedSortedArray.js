function findMin(nums) {
  if (nums.length === 0) return undefined;
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  console.log(`Левый = 0, правый = ${right}`);

  while (left < right) {
    console.log(`Зашли в цикл`);

    let mid = Math.floor((right - left) / 2 + left);
    console.log(`Середина ${nums[mid]}`);

    if (nums[mid] > nums[right]) {
      console.log(
        `${nums[mid]} больше чем ${nums[right]}, теперь минимум справа right = ${nums[mid]}`
      );
      left = mid + 1;
    } 
    else {
      console.log(
        `${nums[mid]} меньше или равно ${nums[right]}, минимум слева — сдвигаем right = ${mid}`
      );
      right = mid;
    }
  }
  return nums[left];
}

console.log(findMin([8, 1, 2, 3, 4, 5, 6, 7]));


// 33
// 154