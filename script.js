"use strict"

const img2 = document.querySelector(".img")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".btn--close-form")
const btnShowForm = document.querySelectorAll(".btn--show-form")
const form = document.querySelector(".form")
const imgContainer = document.querySelector(".container")

// imgContainer.addEventListener("click", function () {
//   console.log("ss")
// })

const openForm = function (e) {
  e.preventDefault()
  form.classList.remove("hidden")
  overlay.classList.remove("hidden")
}
const closeForm = function () {
  form.classList.add("hidden")
  overlay.classList.add("hidden")
}

btnShowForm.forEach((btn) => btn.addEventListener("click", openForm))
btnCloseModal.addEventListener("click", closeForm)
overlay.addEventListener("click", closeForm)
