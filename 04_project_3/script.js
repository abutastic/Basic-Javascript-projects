const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const body = document.querySelector("body");

function randomColorGenerator() {
  const randomVal1 = Math.floor(Math.random() * 255 + 1);
  const randomVal2 = Math.floor(Math.random() * 255 + 1);
  const randomVal3 = Math.floor(Math.random() * 255 + 1);

  let randomColor = `rgb(${randomVal1}, ${randomVal2}, ${randomVal3})`;
  // console.log(typeof randomColor); // string

  return randomColor;
}

startBtn.addEventListener("click", function () {
  let functioning = setInterval(() => {
    body.style.backgroundColor = randomColorGenerator();
  }, 300);

  stopBtn.addEventListener('click', (e)=> {
    // e.stopPropagation() // no need 
    // body.style.backgroundColor = '#fff' // does not looks good
    clearInterval(functioning)
  })
});



