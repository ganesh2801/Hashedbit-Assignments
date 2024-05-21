function correctWord(sentence, wrong, correct) {
    const regex = new RegExp("\\b" + wrong + "\\b", "gi");
    const correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}
let sentence = "Ths sentnce has a wrng wrd.";
let correctedSentence = correctWord(sentence, "Ths", "This");
correctedSentence = correctWord(correctedSentence, "wrng", "wrong");
console.log(correctedSentence);
