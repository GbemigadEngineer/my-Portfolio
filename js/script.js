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

//  Adding gynamic year to the footer
const year = new Date().getFullYear();
document.querySelector("footer p").textContent = `© ${year} Oduwole Oluwagbemiga. All rights reserved.`;
