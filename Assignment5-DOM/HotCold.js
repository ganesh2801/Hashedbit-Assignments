function displayRandomNumber() {
    const randomNumber = Math.round(Math.random() * 40) - 20;
    const numParagraph = document.getElementById('num');
    numParagraph.textContent = randomNumber;
    const resultDiv = document.createElement('div');
    if (randomNumber < 0) {
        resultDiv.textContent = "Cold";
    } else {
        resultDiv.textContent = "Hot";
    }
    numParagraph.insertAdjacentElement('afterend', resultDiv);
}
