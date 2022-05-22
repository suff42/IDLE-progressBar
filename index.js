const progressBar = document.querySelector(".progres-bar");
const moneyDisplay = document.querySelector(".money");
const moneyGainDescription = document.querySelector(
  ".money-gain-description > span"
);
const increaseBarMoneyBtn = document.querySelector(".inc-bar-money");

let progresWidth = 0;
let money = Number(localStorage.getItem("money"));
// let money = 1;
let moneyMultiplier = Number(localStorage.getItem("mult"));

moneyGainDescription.innerText = moneyMultiplier;
const updateMoney = () => {
  moneyDisplay.innerText = "$" + money;
};

const grow = setInterval(() => {
  updateMoney();
  progresWidth++;
  progressBar.style.width = progresWidth + "%";

  if (progressBar.style.width === "100%") {
    progresWidth = 0;
    money += moneyMultiplier;
  }
}, 50);

const saveGame = setInterval(() => {
  localStorage.setItem("money", money);
  localStorage.setItem("mult", moneyMultiplier);
}, 100);

increaseBarMoneyBtn.addEventListener("click", () => {
  if (money >= 10) {
    moneyMultiplier++;
    moneyGainDescription.innerText = moneyMultiplier;
    money -= 10;
  }
});
