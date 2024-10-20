let count = 0; // initial value

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const sinlgeBtn = e.currentTarget.classList;
    if(sinlgeBtn.contains("decrease")){
        count--
    } else if(sinlgeBtn.contains("increase")){
        count++
    } else {
        count = 0;
    }
    if(count > 0){
        value.style.color = "green"
    } else if(count < 0){
        value.style.color = "red"
    } else{
        value.style.color = "black"
    }
    value.textContent = count;
  });
});


/* simple code with few problems */

// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".increase");
// const value = document.getElementById("value");

// let count = 0;

// increase.addEventListener("click", function(){
//     value.textContent = ++count
// })
// decrease.addEventListener("click", function(){
//     value.textContent = --count
// })
// reset.addEventListener("click", function(){
//     value.textContent = 0
// })
