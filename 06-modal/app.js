// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const openModal = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", function(){
    modal.classList.add("open-modal")
})

closeModal.addEventListener("click", function(){
    modal.classList.remove("open-modal")
})