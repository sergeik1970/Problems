// Напишите функцию charCount, которая принимает строку 
// в качестве аргумента и возвращает объект, содержащий 
// количество вхождений каждого алфавитного символа 
// и цифры в строке. При этом символы должны быть 
// приведены к нижнему регистру, а все неалфавитные 
// символы и пробелы игнорируются.

function charCount(str) {
    const line = "abcdefghigklmnopqrstuvwxyz1234567890";
    // const letters = line.split('');
    // console.log(letters);
    const lettersInStr = str.toLowerCase().split('');
    // console.log(lettersInStr);
    const obj = {};
    for (let i = 0; i < lettersInStr.length; i++) {
        let k = lettersInStr[i]
        if (line.includes(k)) {
            // console.log(`Символ ${k} есть`);
            if (!(k in obj)) {
                obj[k] = 1
            }
            else {
                obj[k] += 1
            }
            // console.log(obj);

        }
        else {
            // console.log(`Символа ${k} нет`);
        }
    }
    // console.log(obj);
    return obj;

}

function charCount2(str) {
    let obj = {};
    // Перебираем каждый символ строки
    for (let char of str) {
        char = char.toLowerCase();
        // Проверяем, является ли символ буквой или цифрой
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

console.log(charCount2(" Hello! 555 "));
console.log(charCount2("Lorem ipsum dolor sit amet, consectetur 5 adipiscing elit. Nulla nec vehicula neque. Class aptent taciti 60 sociosqu ad litora torquent per conubia $ nostra, per inceptos himenaeos. & Praesent id magna 0 volutpat, viverra enim ac, imperdiet tellus. ! Fusce feugiat tincidunt 765 dolor, vitae ^^ pellentesque erat gravida id. Mauris 14 orci risus %, aliquet vitae condimentum 4 quis."));
