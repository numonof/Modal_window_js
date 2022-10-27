"use strict"
// Modal
let showModal = document.querySelector('.open_modal');
let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector('.close-modal');
let owerlay = document.querySelector('.owerlay');
// Open Modal
const openModal = function(){
    modal.classList.remove('hidden');
    owerlay.classList.remove('hidden');
}

showModal.addEventListener('click', openModal)
// closeModal
const closeModal = function(){
    modal.classList.add('hidden');
    owerlay.classList.add('hidden');
}
closeModalBtn.addEventListener( 'click', closeModal);
owerlay.addEventListener( 'click', closeModal);

document.addEventListener( 'keydown' , function (evt) {
    if (evt.key === 'Escape'){
        closeModal()  
    }
})
closeModal()
