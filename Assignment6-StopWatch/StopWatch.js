let timer;
let hours = 0, minutes = 0, seconds = 0;
function start() {
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('stop').disabled = false;
    timer = setInterval(updateTime, 1000);
}
function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('time').innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
function pause() {
    clearInterval(timer);
    document.getElementById('pause').innerText = 'Continue';
    document.getElementById('pause').onclick = continueTimer;
}
function continueTimer() {
    document.getElementById('pause').innerText = 'Pause';
    document.getElementById('pause').onclick = pause;
    start();
}
function stop() {
    clearInterval(timer);
    hours = minutes = seconds = 0;
    document.getElementById('time').innerText = '00:00:00';
    document.getElementById('pause').innerText = 'Pause';
    document.getElementById('start').disabled = false
    document.getElementById('pause').disabled = true;
    document.getElementById('stop').disabled = true;
}
