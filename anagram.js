// Даны две строки, напишите функцию, чтобы определить, является ли 
// вторая строка анаграммой первой. Анаграмма — это слово, фраза 
// или имя, образованное перестановкой букв другого слова, 
// например, "cinema", образованное из "iceman".

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    first = str1.split('')
    second = str2.split('')

    for (let i = 0; i < first.length; i++) {
        if (first.includes(second[i])) {
            console.log(`Символ ${second[i]} есть`);
        }
        else {
            return false;
        }
    }
    return true;
}

function isAnagram3(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let first = {}
    for (let i = 0; i < str1.length; i++) {
        first[str1[i]] = (first[str1[i]] || 0) + 1
    }
    console.log(first);
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!(first[letter])) {
            return false;
        }
        else {
            first[letter] -= 1
        }  
    }
    return true;


}

console.log(isAnagram3("cinema", "iceman"));


function isAnagram2(str1, str2) {
    const A = str1.split('').sort().join('')
    const B = str2.split('').sort().join('')
    return A === B;
}

// console.log(isAnagram("cinema", "iceman"));

// console.log(isAnagram2("cinema", "iceman"));

