function isValid2(s) {
  let obj = {};
  for (let bracket of s) {
    obj[bracket] = (obj[bracket] || 0) + 1;
  }
  console.log(obj);

  return obj["("] == obj[")"] && obj["{"] == obj["}"] && obj["["] == obj["]"];
}

function isValid(s) {
  // Создаем массив
  let arr = [];

  //   Цикл для перебора всех скобок
  for (let ch of s) {
    // Добавляем скобку в массив если она открытая
    if (ch == "(" || ch == "{" || ch == "[") {
      arr.push(ch);
    }
    // Если закрытая
    else {
      // Получаем последнюю скобку
      let bracket = arr.pop();
      // Если скобка не подходит то false
      if (
        (ch == ")" && bracket !== "(") ||
        (ch == "}" && bracket !== "{") ||
        (ch == "]" && bracket !== "[")
      ) {
        return false;
      }
    }
  }
  // Если скобки закончились - все хорошо
  return arr.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("({})")); // true
console.log(isValid("([{]})")); // false
