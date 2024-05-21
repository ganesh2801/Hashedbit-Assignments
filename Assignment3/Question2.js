let str = 'I love my India';
let words = str.split(' ');
let reversedStr = words.reduceRight((accumulator, currentWord) => {
    return accumulator + ' ' + currentWord;
});
console.log(reversedStr.trim());
