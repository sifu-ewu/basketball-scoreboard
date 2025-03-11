// Score elements
const homeScore = document.querySelector('.home .score');
const guestScore = document.querySelector('.guest .score');

// Timer elements
const timeDisplay = document.querySelector('.time');
const timerButton = document.querySelector('.timer-btn');
const resetButton = document.querySelector('.reset-btn');

let homePoints = 0;
let guestPoints = 0;
let timeLeft = 12 * 60; // 12 minutes in seconds
let timerInterval = null;
let isTimerRunning = false;

// Add points functions
function addPoints(team, points) {
    if (team === 'home') {
        homePoints += points;
        homeScore.textContent = homePoints;
    } else {
        guestPoints += points;
        guestScore.textContent = guestPoints;
    }
}

// Timer functions
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeDisplay.textContent = formatTime(timeLeft);
    } else {
        clearInterval(timerInterval);
        timerButton.textContent = 'Start';
        isTimerRunning = false;
    }
}

function toggleTimer() {
    if (!isTimerRunning) {
        if (timeLeft === 0) return;
        timerInterval = setInterval(updateTimer, 1000);
        timerButton.textContent = 'Pause';
        isTimerRunning = true;
    } else {
        clearInterval(timerInterval);
        timerButton.textContent = 'Start';
        isTimerRunning = false;
    }
}

function resetGame() {
    // Reset scores
    homePoints = 0;
    guestPoints = 0;
    homeScore.textContent = '0';
    guestScore.textContent = '0';
    
    // Reset timer
    clearInterval(timerInterval);
    timeLeft = 12 * 60;
    timeDisplay.textContent = '12:00';
    timerButton.textContent = 'Start';
    isTimerRunning = false;
}

// Event listeners
document.querySelectorAll('.home .btn').forEach(button => {
    button.addEventListener('click', () => {
        addPoints('home', parseInt(button.dataset.points));
    });
});

document.querySelectorAll('.guest .btn').forEach(button => {
    button.addEventListener('click', () => {
        addPoints('guest', parseInt(button.dataset.points));
    });
});

timerButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetGame);