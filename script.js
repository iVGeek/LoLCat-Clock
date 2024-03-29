var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var afternoon = 14; // 2PM
var partyTime = 17; // 5PM
var goodnight = 21; // 9PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();

var updateClock = function() {
    var messageText;
    var message = document.getElementById("timeEvent");
    var lolcat = document.getElementById("lolcat");
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

    if (time == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "IZZ PARTEE TIME!!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "IZZ NAP TIME…";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "IZZ NOM NOM NOM TIME!!";
    } else if (time == wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "IZZ TIME TO GETTUP.";
    } else if (time < noon) {
        messageText = "Good Morning!";
    } else if (time >= evening) {
        image = "https://raw.githubusercontent.com/iVGeek/LoLCat-Clock/main/images/evng.jpg";
        messageText = "Good Evening!";
    } else if (time >= goodnight) {
        image = "https://raw.githubusercontent.com/iVGeek/LoLCat-Clock/main/images/gdnt.jpg";
        messageText = "GoodNight!";
    } else {
        image = "https://raw.githubusercontent.com/iVGeek/LoLCat-Clock/main/images/lazyafternoon.jpg";
        messageText = "Good Afternoon!";
    }

    message.innerText = messageText;
    lolcat.src = image;

    showCurrentTime();
};

var showCurrentTime = function() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {
    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "#222";
    } else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText = "PARTY OVER";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
};

partyTimeButton.addEventListener('click', partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
napTimeSelector.addEventListener("change", napEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
