let gameSeg = [];
let userSeq = [];

let started = false;
let level = 0;

// step 4 (random button selector)
let randomColorsArray = ["yellow", "red", "green", "purple"];

// fetch html element objects
let h2 = document.querySelector("h2");

// step 1 (start the game)
document.addEventListener("keydown", function () {
  if (started == false) {
    console.log("game started");
    started = true;

    // run this func immediately
    levelUp();
  }
});

// step 3 (flash the random button)
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

// step 2 (Level up the game)
function levelUp() {
  userSeq = [];
  console.log("Game level up");
  level++;
  h2.innerText = `Level ${level}`;

  //random button selector
  let randomNum = Math.floor(Math.random() * randomColorsArray.length);
  let randomColor = randomColorsArray[randomNum];
  let randombtn = document.querySelector(`.${randomColor}`);
  console.log(randombtn);

  gameSeg.push(randomColor);
  console.log(gameSeg);
  // random button flash
  gameFlash(randombtn);
}

// step 5 (Match userSeq === gameSeq)
function checkAns(idx) {
  // console.log("current leve", level);

  if (userSeq[idx] == gameSeg[idx]) {
    if (userSeq.length == gameSeg.length) {
      setTimeout(levelUp, 1000)
    }
  } else {
    h2.innerHTML = `Game Over: Your Score is ${level}. <br> Press any key to start the game again `;
    bodyEffect()
    reset();
  }
}

// step 4 (button event listener clicking button functionality)

function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);

  let userColor = this.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset(){
  started = false;
  gameSeg = [];
  userSeq = [];
  level = 0;
}

let body = document.querySelector("body");

function bodyEffect(){
  body.style.backgroundColor = "red";
  setTimeout(function(){
    body.style.backgroundColor = "white"
  }, 1000)
}

