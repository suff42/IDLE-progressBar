import {
  moneyDisplay,
  progressBar,
  statGPB,
  upgradeIncreaseGPBButton,
} from './src/querySelectors.js';
import gameObject from './src/gameObject.js';
import { loadGame, saveGame } from './src/localStorageAPI.js';

loadGame();

let width = 0;
progressBar.style.width = width;

const renderDisplay = () => {
  upgradeIncreaseGPBButton.children[0].innerText = gameObject.upgrades[0].name;
  upgradeIncreaseGPBButton.children[1].innerText = `+ $${
    gameObject.upgrades[0].increase * gameObject.upgrades[0].owned
  }`;
  upgradeIncreaseGPBButton.children[2].innerText = `cost: $${gameObject.upgrades[0].cost}`;
  upgradeIncreaseGPBButton.children[3].innerText = `owned: ${gameObject.upgrades[0].owned}`;

  moneyDisplay.innerText = gameObject.money;
  statGPB.innerText = `gold per bar (GPB): ${gameObject.gpb}`;
};

renderDisplay();

setInterval(() => {
  width += 1;
  progressBar.style.width = `${width}%`;

  if (width === 100) {
    width = 0;

    gameObject.money += gameObject.gpb;
    moneyDisplay.innerText = gameObject.money;
  }
}, 10);

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
