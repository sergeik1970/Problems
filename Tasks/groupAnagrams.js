function groupAnagrams(strs) {
  const res = {};

  for (let s of strs) {
    const count = new Array(26).fill(0);

    for (let c of s) {
      let idx = c.charCodeAt(0) - "a".charCodeAt();
      count[idx] += 1;
    }

    // составляем хэш таблицу
    if (!res[count]) {
      res[count] = [];
    }
    res[count].push(s);
  }

  return Object.values(res);
}

console.log(groupAnagrams(["abc", "eat", "tea", "tan", "ate", "nat", "bat"]));
