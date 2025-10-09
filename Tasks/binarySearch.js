// 704 LeetCode
function binarySearch(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        console.log(`Начало ${start}, конец ${end}`);
        
        let mid = Math.floor((end - start) / 2) + start;
        console.log(`Середина ${mid}`);
        
        if (nums[mid] < target) {
            console.log(`Число ${target} больше чем ${nums[mid]}, теперь start = ${mid}`);
            start = mid + 1;
        }
        else if (nums[mid] === target) {
            console.log(`Число ${target} стоит на месте ${mid}`);
            return mid;
        }
        else {
            console.log(`Число ${target} меньше чем ${nums[mid]}, теперь end = ${mid}`);
            
            end = mid - 1;
        }
    }
    console.log(`Число не найдено`);
    
    return -1;
}

console.log(binarySearch([-3, -1, 0, 2, 4, 6, 7, 8], 4));
