import './style.css'
import javascriptLogo from './javascript.svg'


var project = document.querySelector('#app')
let valueMax = 150;
let valueLvl = 60;
let percentWidthProgress = '0%';

levelBar();

function levelBar() {
  let bar = document.getElementById("bar01")
  percentWidthProgress = Math.round((valueLvl * 100) / valueMax) + '%'
  document.querySelector('.level-bar').style.width = percentWidthProgress;
}



