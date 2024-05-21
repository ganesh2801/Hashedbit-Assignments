function ageChange(event) {
    const ageInput = event.target.value;
    const errorsHolder = document.getElementById('errors-holder');
    const submitButton = document.querySelector('button[type="submit"]');
    errorsHolder.textContent = '';
    if (ageInput < 5) {
        errorsHolder.textContent = 'You need to be at least 5 years old to participate';
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}
function handleSubmit(event) {
    event.preventDefault();
    const ageInput = parseInt(document.getElementById('q_age').value);
    const ownsPhoneCheckbox = document.getElementById('q_owns_phone');
    const resultHolder = document.getElementById('result-holder');
    resultHolder.textContent = '';
    if (!ageInput) {
        resultHolder.textContent = 'Please choose age';
    } else if (ownsPhoneCheckbox.checked) {
        if (ageInput < 13) {
            resultHolder.textContent = 'You are too young to have a phone';
        } else {
            resultHolder.textContent = 'Use your phone in moderation';
        }
    } else {
        if (ageInput < 13) {
            resultHolder.textContent = 'You will get a phone soon';
        } else {
            resultHolder.textContent = 'You should get a phone';
        }
    }
}
