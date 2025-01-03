"use strict";

const learnMoreLink = document.getElementById("learn-more");

const aboutDetails = document.querySelector(".about-details");

const showLessLink = document.getElementById("show-less");

// Event listener to the about me section

learnMoreLink.addEventListener("click", function (event) {
  event.preventDefault();
  learnMoreLink.style.opacity = 0;
  aboutDetails.style.display = "block";
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

document.querySelectorAll(".slider").forEach((slider) => {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const dotsContainer = slider.querySelector(".dots");
  const totalSlides = images.length;
  let currentIndex = 0;

  //  Smooth scrolling with Intersection Observer API
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);
      if (entry.isIntersecting) {
        document.querySelectorAll("nav ul li a").forEach((link) => {
          link.classList.remove("active");
        });
        navLink.classList.add("active");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Smooth scroll behavior on click
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Create dots for the slider
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active"); // First dot active by default
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
    });
  }

  // Update slider and dots
  const updateSlider = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  // Button click events
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

  // Add keyboard navigation
  document.addEventListener("keydown", (event) => {
    const activeSlider = document.activeElement.closest(".slider") || slider;
    if (activeSlider === slider) {
      if (event.key === "ArrowLeft") {
        // Navigate to the previous slide
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
      } else if (event.key === "ArrowRight") {
        // Navigate to the next slide
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
      }
    }
  });

  // Adjust slider on resize
  window.addEventListener("resize", updateSlider);
});
