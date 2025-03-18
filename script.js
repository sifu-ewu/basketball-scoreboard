let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let time = document.getElementById("time");

let homeScoreValue = 0;
let guestScoreValue = 0;
let timeValue = 0;

function homeScoreAdd(num) {
    homeScoreValue += num;
    homeScore.textContent = homeScoreValue;
}



