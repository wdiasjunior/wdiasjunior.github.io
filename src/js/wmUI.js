// (function() {
//   console.log(
//     "%c Curious to see my ugly code, huh?",
//     "color: #bfc6f7; font-size: 30px; font-weight: bold; background-color: black;");
// })();

const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
moon.style.display = "none";

window.addEventListener('click', function(e){
  const logo = document.getElementById("logo");
  const button = document.getElementById("footerLeftButton");
  const menu = document.getElementById("floatingMenu");
  const clickMe = document.getElementById("clickMe");

  if(button.contains(e.target)){
    if(window.getComputedStyle(menu).visibility === "hidden") {
      menu.style.visibility = "visible";
      logo.classList.remove("logo");
      logo.classList.add("logo2");
      button.classList.add("footerLeftButtonActive");
    } else if(window.getComputedStyle(menu).visibility === "visible") {
      menu.style.visibility = "hidden";
      logo.classList.remove("logo2");
      logo.classList.add("logo");
      button.classList.remove("footerLeftButtonActive");
    }
  } else {
    if(window.getComputedStyle(menu).visibility === "visible") {
      menu.style.visibility = "hidden";
      logo.classList.remove("logo2");
      logo.classList.add("logo");
      button.classList.remove("footerLeftButtonActive");
    }
  }

  if(clickMe.contains(e.target)) {
    console.log("lol what were you expecting to see?");
  }

  if(sun.contains(e.target)) {
    console.log("no color scheme change yet. sorry");
    sun.style.display = "none";
    moon.style.display = "block";
  } else if(moon.contains(e.target)) {
    console.log("no color scheme change yet. sorry");
    moon.style.display = "none";
    sun.style.display = "block";
  }
});

const displayTime = () => {
  let date = new Date;
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let amPm = ''

  // am pm
  // hour < 12 ? amPm = 'AM' : amPm = 'PM'

  // 12hr clock
  // if(hour > 12){
  //   hour -= 12
  // }

  // 24hr clock
  if(hour > 24){
    hour -= 24;
  }

  // padding
  let padHour = String(hour).padStart(2, '0');
  let padMin = String(minute).padStart(2, '0');
  // let padSec = String(second).padStart(2, '0');

  // const time = document.getElementById("time");
  const hours = document.getElementById("hour");
  const minutes = document.getElementById("minutes");

  // display
  // time.textContent = `${padHour}:${padMin}  ${amPm}`;
  // time.textContent = `${padHour}:${padMin}`;
  hours.textContent = padHour;
  minutes.textContent = padMin;

  // update in near real-time
  requestAnimationFrame(displayTime);
}

const getDate = () => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let day = weekday[d.getDay()];
  let m = months[d.getMonth()];
  const week_day = document.getElementById("week_day");
  const month_day = document.getElementById("month_day");
  const _month = document.getElementById("month");
  week_day.textContent = day;
  month_day.textContent = d.getDate();
  month.textContent = m;
}

getDate();
displayTime();
