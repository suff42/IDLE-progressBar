import { moneyDisplay, progressBar, statGPB } from './src/querySelectors.js';
import gameObject from './src/gameObject.js';
import { loadGame, saveGame } from './src/localStorageAPI.js';

loadGame();

let width = 0;

moneyDisplay.innerText = gameObject.money;
progressBar.style.width = width;
statGPB.innerText = `gold per bar (GPB): ${gameObject.gpb}`;

setInterval(() => {
  width += 1;
  progressBar.style.width = `${width}%`;

  if (width === 100) {
    width = 0;

    gameObject.money += gameObject.gpb;
    moneyDisplay.innerText = gameObject.money;
  }
}, 10);

setInterval(() => {
  saveGame();
}, 1000);
