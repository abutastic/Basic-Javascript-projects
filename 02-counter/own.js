// initial value
let count = 0;

const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains("decrease")) {
      count--;
    } else if (btnClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "hsl(209, 61%, 16%)";
    }
    value.textContent = count;
  });
});
