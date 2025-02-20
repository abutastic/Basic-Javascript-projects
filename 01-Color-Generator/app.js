let box = document.querySelector(".box");
let startbtn = document.querySelector("#start");
let stopbtn = document.querySelector("#stop");

const hexValues = "0123456789ABCDEF";

function colorGenerator() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hexValues[Math.floor(Math.random() * 16)];
  }

  return color;
}

let show;
startbtn.addEventListener("click", function () {

  if (!show) {
    box.classList.add("rotate")
    show = setInterval(() => {
      let color = colorGenerator();
      box.style.backgroundColor = color;
    }, 100);
  }
});

stopbtn.addEventListener("click", function () {
  clearInterval(show);
  show = null;
  box.classList.remove("rotate")
});

