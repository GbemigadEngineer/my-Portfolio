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

// const slides = document.querySelectorAll(".slide");
// const btnLeft = document.querySelector(".slider__btn--left");
// const btnRight = document.querySelector(".slider__btn--right");
// const dotContainer = document.querySelector(".dots");

// let currentSlide = 0;
// const maxSlide = slides.length;

// const createDots = function () {
//   slides.forEach((_, index) => {
//     dotContainer.insertAdjacentHTML(
//       "beforeend",
//       `<button class="dots__dot" data-slide=${index}></button>`
//     );
//   });
// };

// const activateDot = function (slide) {
//   document
//     .querySelectorAll(".dots__dot")
//     .forEach((dot) => dot.classList.remove("dots__dot--active"));

//   document
//     .querySelector(`.dots__dot[data-slide = "${slide}"]`)
//     .classList.add("dots__dot--active");
// };

// const goToSlide = function (slide) {
//   slides.forEach((slides, index) => {
//     slides.style.transform = `translateX(${100 * (index - slide)}%)`;
//   });
// };

// const nextSlide = function () {
//   if (currentSlide === maxSlide - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }

//   goToSlide(currentSlide);
//   activateDot(currentSlide);
// };
// const previousSlide = function () {
//   if (currentSlide === 0) {
//     currentSlide = maxSlide - 1;
//   } else {
//     currentSlide--;
//   }
//   goToSlide(currentSlide);
//   activateDot(currentSlide);
// };

// const init = function () {
//   goToSlide(0);
//   createDots();
//   activateDot(0);
// };
// init();
// //Event Handlers
// btnRight.addEventListener("click", nextSlide);

// btnLeft.addEventListener("click", previousSlide);

// document.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowLeft") previousSlide();
//   event.key === "ArrowRight" && nextSlide();
// });

// dotContainer.addEventListener("click", function (event) {
//   if (event.target.classList.contains("dots__dot")) {
//     const { slide } = event.target.dataset;
//     goToSlide(slide);
//     activateDot(slide);
//   }
// });

document.querySelectorAll('.slider').forEach((slider) => {
  const slides = slider.querySelector('.slides');
  const images = slides.querySelectorAll('img');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');
  const dotsContainer = slider.querySelector('.dots');
  const totalSlides = images.length;
  let currentIndex = 0;

  // Create dots for the slider
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active'); // First dot active by default
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlider();
    });
  }

  // Update slider and dots
  const updateSlider = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  };

  // Button click events
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  // Add keyboard navigation
  document.addEventListener('keydown', (event) => {
    const activeSlider = document.activeElement.closest('.slider') || slider;
    if (activeSlider === slider) {
      if (event.key === 'ArrowLeft') {
        // Navigate to the previous slide
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
      } else if (event.key === 'ArrowRight') {
        // Navigate to the next slide
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
      }
    }
  });

  // Adjust slider on resize
  window.addEventListener('resize', updateSlider);
});
