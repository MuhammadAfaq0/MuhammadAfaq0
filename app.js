let timer; // Timer variable
let time = 0; // Stopwatch time in seconds
let isRunning = false; // Flag to check if stopwatch is running

function startStopwatch() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000); // Start a new timer
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(timer); // Stop the timer
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer); // Clear the timer
    time = 0; // Reset the time
    updateTime(); // Update the display
    isRunning = false;
}

function updateTime() {
    time++;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    document.querySelector('.time').textContent = formattedTime;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
