let noon = 12;
let evening = 18; // 6PM
let wakeupTime = 9; // 9AM
let lunchTime = 12; // 12PM
let partyTime = 17; // 5PM
let napTime = lunchTime + 2; // 2PM
let time = new Date().getHours();

const updateClock = function() {
let messageText;
let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
const timeEventJS = document.getElementById("timeEvent");
const lolcatImage = document.getElementById("lolcat");

if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://newbloggycat.files.wordpress.com/2020/04/cute-cat-with-messy-hair.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://www.petmd.com/sites/default/files/shutterstock_234894799.jpg";
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";
}

lolcatImage.src = image;
timeEventJS.innerText = messageText;
showCurrentTime();
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};


updateClock(); 
var oneSecond = 1000; 
setInterval (updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var partyEvent = function() {
 
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#222";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};
partyTimeButton.addEventListener('click', partyEvent);

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");
var wakeUpEvent = function()
{
    wakeupTime = wakeUpTimeSelector.value;
};
var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};
var napEvent = function()
{
    napTime = napTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);
