function swapTheme() {
    const appDiv = document.getElementById('app');
    const swapButton = document.getElementById('swap');

    // Check if the current theme is 'day' or 'night'
    if (appDiv.classList.contains('day')) {
        // If current theme is 'day', switch to 'night'
        appDiv.classList.remove('day');
        appDiv.classList.add('night');
        swapButton.classList.remove('button_day');
        swapButton.classList.add('button_night');
    } else {
        // If current theme is 'night', switch to 'day'
        appDiv.classList.remove('night');
        appDiv.classList.add('day');
        swapButton.classList.remove('button_night');
        swapButton.classList.add('button_day');
    }
}