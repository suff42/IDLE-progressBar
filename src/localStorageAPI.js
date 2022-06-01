import gameObject from './gameObject.js';

export const saveGame = () => {
  localStorage.setItem('gameSave', JSON.stringify(gameObject));
};

export const loadGame = () => {
  const gameSave = JSON.parse(localStorage.getItem('gameSave'));

  if (gameSave) {
    gameObject.money = gameSave.money;
    gameObject.gpb = gameSave.gpb;
    gameObject.upgrades = gameSave.upgrades;
  }
};
