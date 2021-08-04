'use strict'

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
buttonStart.addEventListener('click', startChange);
buttonStop.addEventListener('click', stopChange);
let timeChangeColor = null;

function startChange(event) {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
  function startChangeColor() {
      body.style.backgroundColor = getRandomHexColor();
      buttonStart.setAttribute("disabled", "disabled");
   };
   timeChangeColor = setInterval(startChangeColor, 1000);
};

function stopChange(event) {
   buttonStart.removeAttribute("disabled");
   clearInterval(timeChangeColor);

};
