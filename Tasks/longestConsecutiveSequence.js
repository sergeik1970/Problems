// Given an unsorted array of integers nums,
// return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// 128 задача на leetCode
// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  // Сортировка массива по возрастанию
  nums = nums.sort((a, b) => a - b);
  let counter = 1;
  let maxCounter = 1;
  for (let i = 0; i < nums.length; i++) {
    // Разница между текущим и предыдущим элементом
    const digit = nums[i + 1] - nums[i];
    // Если она равна 1, то увеличиваем счетчик
    if (digit === 1) {
      counter++;
      // Сравниваем счетчик с максимальным значением
      if (counter > maxCounter) {
        maxCounter = counter;
      }
    }
    // Если разница не равна нулю, то обнуляем счетчик (ноль - дубликат)
    else if (digit != 0) {
      counter = 1;
    }
  }
  return maxCounter;
}

const longestConsecutive2 = function (nums) {
  const store = new Set(nums);
  console.log(store);

  let ans = 0;
  for (const num of store) {
    const isStart = !store.has(num - 1);

    if (isStart) {
      let current = num;
      let counter = 1;

      while (store.has(current + 1)) {
        current += 1;
        counter++;
      }

      ans = Math.max(counter, ans);
    }
  }

  return ans;
};

console.log(longestConsecutive([100, 2, 200, 1, 3, 2])); // 3

console.log(longestConsecutive2([0, 3, 7, 2, 5, 8, 4, 6, 0, 1, 1, 1, 1])); // 9

console.log(longestConsecutive([0, -1, -2, -3, 6, 5, 4, 3, 2, 1])); // 10

console.log(longestConsecutive([])); // 10
