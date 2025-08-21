// Напишите функцию под названием findLongestSubstring
// которая принимает строку и возвращает длину самой длинной
// подстроки с уникальными символами.
// Сложность по времени - O(n)

// findLongestSubstring('') // 0

// findLongestSubstring('rithmschool') // 7

// findLongestSubstring('thisisawesome') // 6

// findLongestSubstring('thecatinthehat') // 7

// findLongestSubstring('bbbbbb') // 1

// findLongestSubstring('longestsubstring') // 8

// findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(str) {
  let left = 0;
  let seen = {};
  let maxLen = 0;
  for (let i = 0; i < str.length; i++) {
    // i - правая граница, letter - текущий символ
    let letter = str[i];
    // Если символ встречался и его последний индекс находится в текущем окне, то это дубликат
    if (seen[letter] !== undefined && seen[letter] >= left) {
        // сдвигаем левую границу окна на позицию после последнего вхождения этой буквы
      left = seen[letter] + 1;
    }
    // обновляем макс длину
    maxLen = Math.max(maxLen, i - left + 1);
    // запоминаем последний индекс символа
    seen[letter] = i;
  }
  return maxLen;
}

console.log(findLongestSubstring('')); // 0

console.log(findLongestSubstring('rithmschool')); // 7

console.log(findLongestSubstring("thisisawesome")); // 6

console.log(findLongestSubstring('thecatinthehat')); // 7

console.log(findLongestSubstring('bbbbbb')) // 1

console.log(findLongestSubstring('longestsubstring')) // 8

console.log(findLongestSubstring('thisishowwedoit')) // 6