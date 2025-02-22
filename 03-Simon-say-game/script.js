let h2 = document.querySelector("h2");
let btns = document.querySelectorAll(".btn");
let body = document.querySelector("body");

let started = false;
let level = 0;
let gameSeq = [];
let userSeq = [];

let colors = ["yellow", "red", "green", "purple"];

document.addEventListener("keydown", function () {
  if (started === false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomNum = Math.floor(Math.random() * 4);
  let randomColor = colors[randomNum];
  let randombtn = document.querySelector(`.${randomColor}`);

  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randombtn);
}

// Button Flashes;

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(() => {
    btn.classList.remove("gameFlash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

// Button click

for (let btn of btns) {
  btn.addEventListener("click", btnPress);
}

function btnPress() {
  if (!started) return;
  let btn = this;
  userFlash(btn);

  let btnColor = btn.getAttribute("id");
  userSeq.push(btnColor);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      levelUp();
    }
  } else {
    h2.innerHTML = `Game over: your score is ${level} <br> Press any key to start the game again`;
    reset();
    bodyEffect();
  }
}

function reset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}

function bodyEffect() {
  body.style.backgroundColor = "red";
  setTimeout(function () {
    body.style.backgroundColor = "white";
  }, 500);
}
