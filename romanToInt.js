// Задача: Римские числа в целые
// --------------------------------------
// Дана строка s, представляющая римское число.
// Необходимо преобразовать её в целое число и вернуть результат.
//
// Правила записи римских чисел:
// - Символы: 
//   I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
// - Обычно числа записываются от большего к меньшему слева направо.
// - Но есть случаи вычитания:
//   I перед V или X означает 4 и 9,
//   X перед L или C означает 40 и 90,
//   C перед D или M означает 400 и 900.
//
// Пример:
//   Ввод: "MCMIV"
//   Вывод: 1904

var romanToInt = function (s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  //   Делим на буквы
  let arr = s.split("");
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    // Левый
    let left = values[arr[i]];
    if (i + 1 < arr.length) {
      // Правее левого
      let right = values[arr[i + 1]];
      //   Если левый меньше правого, типа IX и других
      if (left < right) {
        let digit = right - left;
        counter += digit;
        // Пропускаем один
        i += 1;
      }
      // Если последний то просто прибавляем
      else {
        counter += left;
      }
    } 
    else {
      counter += left;
    }
  }
  console.log(counter);
  
  return counter;
};

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
