import {
  moneyDisplay,
  progressBar,
  statGPB,
  upgradeIncreaseGPBButton,
  resetGameBtn,
} from './src/querySelectors.js';
import gameObject from './src/gameObject.js';
import { loadGame, saveGame } from './src/localStorageAPI.js';
import format from './src/format.js';

loadGame();

const resetGame = () => {
  gameObject.money = 0;
  gameObject.gpb = 1;
  gameObject.upgrades[0].increase = 1.67;
  gameObject.upgrades[0].cost = 4;
  gameObject.upgrades[0].owned = 1;
};

resetGameBtn.addEventListener('click', () => {
  resetGame();
});

let width = 0;
progressBar.style.width = width;

const renderDisplay = () => {
  upgradeIncreaseGPBButton.children[0].innerText = gameObject.upgrades[0].name;
  upgradeIncreaseGPBButton.children[1].innerText = `+ $${format(
    gameObject.upgrades[0].increase * gameObject.upgrades[0].owned
  )}`;
  upgradeIncreaseGPBButton.children[2].innerText = `cost: $${format(
    gameObject.upgrades[0].cost
  )}`;
  upgradeIncreaseGPBButton.children[3].innerText = `owned: ${format(
    gameObject.upgrades[0].owned
  )}`;
  moneyDisplay.innerText = format(gameObject.money);
  statGPB.innerText = `gold per bar (GPB): ${format(gameObject.gpb)}`;
};

renderDisplay();

setInterval(() => {
  width += 1;
  progressBar.style.width = `${width}%`;

  if (width === 100) {
    width = 0;

    gameObject.money += gameObject.gpb;
    moneyDisplay.innerText = format(gameObject.money);
  }
}, 300);

upgradeIncreaseGPBButton.addEventListener('click', () => {
  gameObject.money -= gameObject.upgrades[0].cost;
  gameObject.upgrades[0].cost = 4 * 1.07 ** gameObject.upgrades[0].owned;
  gameObject.upgrades[0].owned += 1;
  gameObject.gpb =
    gameObject.upgrades[0].increase * gameObject.upgrades[0].owned;

  renderDisplay();
});

setInterval(() => {
  saveGame();
}, 1000);
