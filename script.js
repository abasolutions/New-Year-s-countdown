
//Let search the div elements and save them in variables
let showDays = document.getElementById("days");
let showHours = document.getElementById("hours");
let showMinutes = document.getElementById("minutes");
let showSeconds = document.getElementById("seconds");
let displayFirst = document.getElementById("displayfirst");
let displayLast = document.getElementById("happynewyear");



//Now we have the two data we needed, and we can count the odds between the two date
function countDown(){
    //First we need to have the punctual time of New Year"s day
    const newYearDate = new Date("2025 Januar 1, 00:00:00");
    const newYearTime = newYearDate.getTime();
    //Then we need the current time
    const currentTime = new Date().getTime();
    let odd = newYearTime - currentTime;
    //Since the getTime() method gives the data in milliseconds, we need to convert it first to second, 
    //and then we can work with the other time datas
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    //Now we can calculate the number of days, we need to use the Math.floor() method to get an integer numner
    let days = Math.floor(odd/day);
    //And we calculate the other datas
    let hours = Math.floor((odd % day) / hour);
    let minutes = Math.floor((odd % hour)/ min);
    let seconds = Math.floor((odd % min) / sec);
    //Now we just need to show these values in the div elements
    showDays.innerText = days;
    showHours.innerText = hours;
    showMinutes.innerText = minutes;
    showSeconds.innerText = seconds;
     //We can see the time changing when we refresh the browser,
    // we need to implement a setInterval() event to refresh the counter in every second
   if ((odd === 0) || ((days === 0) && (hours === 0) && (minutes === 0) && (seconds === 0))){
    clearInterval(countDownInterval);
    displayFirst.classList.add("hidden");
    displayLast.classList.remove("hide");
   }
}

countDown();

const countDownInterval = setInterval(countDown, 1000);











