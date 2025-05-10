let dice = document.querySelector(".dice");
let roll = document.querySelector(".roll");
let paras = document.querySelector(".paras");
let startRoll = document.querySelector(".start");
let diceImg = document.querySelector(".dice-image");
let data = document.querySelector(".data");
let sum = document.querySelector(".sum");
let values = 0;
let numArr = [];

const randomNo = () => {
  let randomValue = Math.floor(Math.random() * 5) + 1;
  diceImg.innerHTML = `<img src="./images/${randomValue}.png"/>`;
};

const randomNumber = () => {
  let randomValue = Math.floor(Math.random() * 5) + 1;
  numArr.push(randomValue);
  console.log(numArr);
  diceImg.innerHTML = `<img src="./images/${randomValue}.png"/>`;
  values += randomValue;
  data.innerText = `Data: ${numArr.join("+")}`;
  data.style.overflow = 'auto';
  sum.innerText = `Sum is: ${values}`;
};

const randomRoll = () => {
  let isRunning = startRoll.innerText;

  if (isRunning === "Start") {
    startRoll.innerText = "Stop";
    startRoll.classList.add("stop");
    roll = setInterval(randomNumber, 100);
  } else {
    startRoll.innerText = "Start";
    startRoll.classList.remove("stop");
    values = 0;
    numArr = [];
    clearInterval(roll);
  }
};

window.addEventListener("load", randomNumber);
roll.addEventListener("click", randomNo);
startRoll.addEventListener("click", randomRoll);
