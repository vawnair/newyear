const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = "1 Jan 2023";

function countdown(){

const newYearDate = new Date(newYears);
const currentDate = new Date();

const TotalSeconds = (newYearDate - currentDate) / 1000 ;

const days = Math.floor(TotalSeconds / 3600 / 24 );
const hours = Math.floor(TotalSeconds / 3600) %24;
const mins = Math.floor(TotalSeconds / 60)% 60;
const seconds = Math.floor(TotalSeconds % 60);

 daysEl.innerHTML = formatTime(days);
 hoursEl.innerHTML = formatTime(hours);
 minsEl.innerHTML = formatTime(mins);
 secondsEl.innerHTML =formatTime (seconds);
}

function formatTime(time){
  return time < 10 ?  '0'+time : time  //Time precedding zero

}
//intial call
countdown();
setInterval(countdown,1000);
