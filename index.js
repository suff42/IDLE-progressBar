const progressBar = document.querySelector(".progres-bar");
const moneyDisplay = document.querySelector(".money");
const moneyGainDescription = document.querySelector(
  ".money-gain-description > span"
);
const upgrades = [
  {
    id: 0,
    baseIncome: 1.67,
    startingCost: 4,
    costMultFactor: 1.07,
    level: 1,
  },
];
const increaseBarMoneyBtn = document.querySelector(".inc-bar-money");
increaseBarMoneyBtn.innerText = `buy cost: ${
  upgrades[0].startingCost *
  Math.pow(upgrades[0].costMultFactor, upgrades[0].level)
}`;

let progresWidth = 0;
let money = Number(localStorage.getItem("money"));
// let money = 1;
let moneyMultiplier = Number(localStorage.getItem("mult"));

moneyGainDescription.innerText = upgrades[0].baseIncome * upgrades[0].level;

const updateMoney = () => {
  moneyDisplay.innerText = "$" + money;
};

const grow = setInterval(() => {
  updateMoney();
  progresWidth++;
  progressBar.style.width = progresWidth + "%";

  if (progressBar.style.width === "100%") {
    progresWidth = 0;
    money += upgrades[0].baseIncome * upgrades[0].level;
  }
}, 50);

const saveGame = setInterval(() => {
  localStorage.setItem("money", money);
  localStorage.setItem("mult", moneyMultiplier);
}, 1000);

// const resetGame = () => {
//   money = 10;
//   moneyGainDescription.innerText = moneyMultiplier;
// };

increaseBarMoneyBtn.addEventListener("click", () => {
  if (
    money >=
    upgrades[0].startingCost *
      Math.pow(upgrades[0].costMultFactor, upgrades[0].level)
  ) {
    money -=
      upgrades[0].startingCost *
      Math.pow(upgrades[0].costMultFactor, upgrades[0].level);
    upgrades[0].level++;
    moneyGainDescription.innerText = upgrades[0].baseIncome * upgrades[0].level;
  }
});
