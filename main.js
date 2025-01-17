"use strict";
var imageSF = document.querySelectorAll(".trip-image");
var backdrop = document.querySelectorAll(".backdrop");
var modal = document.querySelectorAll(".modal");

function openModal() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

for (i = 0; i < imageSF.length; i++) {
  imageSF[i].addEventListener("click", openModal);
  //DON'T CALL THIS FUNCTION in the addEventListener(method)
}

backdrop.addEventListener("click", closeModal);
