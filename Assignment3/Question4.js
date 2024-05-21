let str = "This is a sample string with minimum 20 characters.";
function countConsonants(str) {
    let consonantsCount = 0;
    str = str.toLowerCase();
    const consonantsRegex = /[bcdfghjklmnpqrstvwxyz]/g;
    for (let char of str) {
        if (char.match(consonantsRegex)) {
            consonantsCount++;
        }
    }
    return consonantsCount;
}
function countVowels(str) {
    let vowelsCount = 0;
    str = str.toLowerCase();
    const vowelsRegex = /[aeiou]/g;
    for (let char of str)
     {
        if (char.match(vowelsRegex)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}
let consonants = countConsonants(str);
let vowels = countVowels(str);
console.log("Number of consonants:", consonants);
console.log("Number of vowels:", vowels);