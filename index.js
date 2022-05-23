import { moneyDisplay, progressBar } from './src/querySelectors.js';

let width = 0;
let money = 0;

moneyDisplay.innerText = money;
progressBar.style.width = width;

setInterval(() => {
  width += 1;
  progressBar.style.width = `${width}%`;

  moneyDisplay.innerText = money;

  if (width === 100) {
    width = 0;

    money += 1;
    moneyDisplay.innerText = money;
  }
}, 10);
