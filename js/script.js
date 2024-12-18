"use strict";

const learnMoreLink = document.getElementById("learn-more");

const aboutDetails = document.querySelector(".about-details");

const showLessLink = document.getElementById("show-less");

// Event listener to the about me section

learnMoreLink.addEventListener("click", function (event) {
  event.preventDefault();
  learnMoreLink.style.opacity = 0;
  aboutDetails.style.display = "flex";
  showLessLink.style.opacity = 100;
});

showLessLink.addEventListener("click", function (event) {
  event.preventDefault();
  showLessLink.style.opacity = 0;
  aboutDetails.style.display = "none";
  learnMoreLink.style.opacity = 100;
});

//  Adding dynamic year to the footer
const year = new Date().getFullYear();
document.querySelector(
  "footer p"
).textContent = `© ${year} Oduwole Oluwagbemiga. All rights reserved.`;

// The Gallery section
// Implementing smooth scrolling

const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlide = slides.length;

const createDots = function () {
  slides.forEach((_, index) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide=${index}></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide = "${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = function (slide) {
  slides.forEach((slides, index) => {
    slides.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
  activateDot(currentSlide);
};
const previousSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();
//Event Handlers
btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", previousSlide);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") previousSlide();
  event.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("dots__dot")) {
    const { slide } = event.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
