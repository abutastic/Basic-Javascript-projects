//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(singleQuestion => {
   const button = singleQuestion.querySelector(".question-btn");

   button.addEventListener("click", function(){
    questions.forEach(function(item){
        if(item !== singleQuestion){
            item.classList.remove("show-text")
        }
    })
    singleQuestion.classList.toggle("show-text")
   })
    
});















// traversing the dom

// const qBtns = document.querySelectorAll(".question-btn");


// qBtns.forEach((btn) => {
//   btn.addEventListener("click", function (event) {
//     let target = event.currentTarget.parentElement.parentElement;
//     target.classList.toggle("show-text")
//   });
// });