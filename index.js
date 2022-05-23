import { moneyDisplay, progressBar } from './src/querySelectors.js';
import gameObject from './src/gameObject.js';
import { loadGame, saveGame } from './src/localStorageAPI.js';

loadGame();

let width = 0;

moneyDisplay.innerText = gameObject.money;
progressBar.style.width = width;

setInterval(() => {
  width += 1;
  progressBar.style.width = `${width}%`;

  if (width === 100) {
    width = 0;

    gameObject.money += 1;
    moneyDisplay.innerText = gameObject.money;
  }
}, 10);

setInterval(() => {
  saveGame();
}, 1000);
