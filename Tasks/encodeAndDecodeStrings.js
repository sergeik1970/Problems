// Design an algorithm to encode a list of strings to a single string.
// The encoded string is then decoded back to the original list of strings.

Input: ["neet", "code", "love", "you"];

Output: ["neet", "code", "love", "you"];

// Две функции, одна для кодирования и другая для декодирования

// #5hello#2hi

function encode(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    // Слово
    let word = arr[i];
    // Длина этого слова
    let wordLength = word.length;
    // Кодируем это слово #длинаслова#слово
    let element = "#" + wordLength.toString() + "#" + word.toString();
    // Добавляем в строку
    str += element;
  }
  return str;
}

function decode(str) {
  let arr = [];
  let i = 0;
  while (i < str.length) {
    // Указатель на первой решетке длины слова
    i++;
    let wordLength = "";
    // Пока не встретится вторая решетка
    while (str[i] != "#") {
      // Записывать длину слова
      wordLength += str[i];
      // Переключаемся на вторую решетку
      i++;
    }
    // Переключаемся на первую букву слова
    i++;
    // Преобразовываем длину в число
    wordLength = Number(wordLength);
    // Вырезаем слово
    let word = str.slice(i, i + wordLength);
    // Добавляем в массив
    arr.push(word);
    // Увеличиваем указатель на длину слова,
    // то есть до первой решетки след слова
    i += wordLength;
  }
  // Возвращаем массив
  return arr;
}

console.log(encode(["neet","code","love","you"]));

console.log(decode("#4#neet#4#code#4#love#3#you"));
