const display = document.querySelector('.display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 10); // Update every 10 milliseconds for centiseconds
        running = true;
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.textContent = 'Start';
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.textContent = 'Start';
    display.textContent = '00:00:00';
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

    display.textContent = minutes + ':' + seconds + ':' + milliseconds;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
