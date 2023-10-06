"use strict";

// Menyimpan document class ke variable
const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Membuat mesin untuk membuka dan menutup modal
//REFACTOR
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//REFACTOR
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Melakukan perulangan untuk beberapa html yang memiliki class yang sama
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Keybord Event
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//NORMAL openModal
// modal.classList.remove("hidden");
// overlay.classList.remove("hidden");
//NORMAL closeModal
//   btnCloseModal.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   });

//   overlay.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   });
