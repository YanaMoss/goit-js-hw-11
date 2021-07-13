'use strict';

const dateSelector = document.querySelector('#date-selector');
const buttonStart = document.querySelector('button[data-start]');
const leftDays = document.querySelector('span[data-days]');
const leftHours = document.querySelector('span[data-hours]');
const leftMinutes = document.querySelector('span[data-minutes]');
const leftSeconds = document.querySelector('span[data-seconds]');
const Swal = require('sweetalert2');


let currentDate = Date.parse(new Date());;
let deadline;
let inputDate;
let timer;
let ms;
let days;
let hours;
let minutes;
let seconds;
 
dateSelector.addEventListener('change', newDate);
buttonStart.addEventListener('click', startTimer);


function newDate(event) {
  inputDate = Date.parse(dateSelector.value)
  if (inputDate > currentDate) {
     buttonStart.removeAttribute("disabled")
  };
}

function startTimer(event) {
  deadline = Date.parse(dateSelector.value);
  if (deadline > currentDate) {
    changeTimer();
    timer = setInterval(changeTimer, 1000);
    
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Please choose a date in the future',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
    clearInterval(timer);
    buttonStart.setAttribute("disabled", "disabled");

    
    
  };
  
  function changeTimer() {
    currentDate = Date.parse(new Date());
    ms = deadline - currentDate;
    convertMs(ms);
    leftDays.textContent = days.toString().padStart(2, "0");
    leftHours.textContent = hours.toString().padStart(2, "0");
    leftMinutes.textContent = minutes.toString().padStart(2, "0");
    leftSeconds.textContent = seconds.toString().padStart(2, "0");

  };
  
  
};
  
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    days = Math.floor(ms / day);
    // Remaining hours
    hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
    };