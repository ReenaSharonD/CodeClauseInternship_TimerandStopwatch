const startTimerButton = document.getElementById("startTimerButton");
const timerInput = document.getElementById("timerInput");
const timerDisplay = document.getElementById("timerDisplay");

let timerInterval;

startTimerButton.addEventListener("click", () => {
    const timeInSeconds = parseInt(timerInput.value, 10);
    if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
        startTimer(timeInSeconds);
    }
});

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    clearInterval(timerInterval);
    
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "00:00";
        }
    }, 1000);
}

const startStopwatchButton = document.getElementById("startStopwatchButton");
const stopStopwatchButton = document.getElementById("stopStopwatchButton");
const stopwatchDisplay = document.getElementById("stopwatchDisplay");

let stopwatchInterval;
let stopwatchTime = 0;

startStopwatchButton.addEventListener("click", () => {
    startStopwatch();
    startStopwatchButton.disabled = true;
    stopStopwatchButton.disabled = false;
});

stopStopwatchButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    startStopwatchButton.disabled = false;
    stopStopwatchButton.disabled = true;
});

function startStopwatch() {
    clearInterval(stopwatchInterval);

    stopwatchInterval = setInterval(function () {
        stopwatchTime++;

        const hours = Math.floor(stopwatchTime / 3600);
        const minutes = Math.floor((stopwatchTime % 3600) / 60);
        const seconds = stopwatchTime % 60;

        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        stopwatchDisplay.textContent = formattedTime;
    }, 1000);
}
