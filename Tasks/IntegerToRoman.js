/*
Задача: преобразовать целое число в римское число.

Символы и их значения:
I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000

Правила записи:
1. Римские числа записываются от большего к меньшему.
2. Если цифра не равна 4 или 9 — используем максимально возможный символ,
   вычитаем его значение и продолжаем преобразование.
3. Для цифр 4 и 9 применяются вычитательные формы:
   4  -> IV      9  -> IX
   40 -> XL     90 -> XC
   400 -> CD   900 -> CM
4. Символы I, X, C, M можно писать подряд не более трёх раз.
   Символы V, L, D не повторяются — для 4 используется вычитательная форма.

Пример:
Ввод: num = 3749
Разбор:
  3000 = MMM   (1000 + 1000 + 1000)
   700 = DCC   (500 + 100 + 100)
    40 = XL    (50 - 10)
     9 = IX    (10 - 1)
Результат: "MMMDCCXLIX"
*/

var intToRoman = function(num) {
    const values = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
]

    let result = ''

    for (const [value, symbol] of values) {
        while (num >= value) {
            result = result + symbol
            num = num - value       
        }
    }
    return result;
};

console.log(intToRoman(1));    // "I"
console.log(intToRoman(4));    // "IV"
console.log(intToRoman(9));    // "IX"
console.log(intToRoman(19));   // "XIX"
console.log(intToRoman(58));   // "LVIII"
console.log(intToRoman(94));   // "XCIV"
console.log(intToRoman(399));  // "CCCXCIX"
console.log(intToRoman(3749)); // "MMMDCCXLIX"