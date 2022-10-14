import './style.css'


let valueMax = 200;
let valueLvl = 89;
let percentWidthProgress = '0%';

levelBar();

function levelBar() {
  percentWidthProgress = Math.round((valueLvl * 100) / valueMax) + '%';
  if (Math.round((valueLvl * 100) / valueMax) >= 100) {
    document.querySelector('.level-bar').style.width = "100%"
    document.querySelector('.percent-value').innerHTML = percentWidthProgress;
  } else {
    document.querySelector('.level-bar').style.width = percentWidthProgress;
    document.querySelector('.percent-value').innerHTML = percentWidthProgress;
  }

}



