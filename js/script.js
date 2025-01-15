"use strict";


//  navs section

// sticky navigation bar

// Select the navbar
const navbar = document.getElementById('navbar');

// Get the offset position of the navbar
const stickyOffset = navbar.offsetTop;

// Add a scroll event listener
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= stickyOffset) {
    // Add the "sticky" class when scrolling past the navbar
    navbar.classList.add('sticky');
  } else {
    // Remove the "sticky" class when scrolling back up
    navbar.classList.remove('sticky');
  }
});


//  Smooth scrolling navs with Intersection Observer API
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

// barner area section

// implementing smooth scrolling on CTA buttons

 // Select all anchor tags inside the action buttons
 const links = document.querySelectorAll('.action-btn a');

 // Add a click event to each link
 links.forEach(link => {
   link.addEventListener('click', function (event) {
     event.preventDefault(); // Prevent default anchor behavior

     // Get the target section from the href attribute
     const targetId = this.getAttribute('href').substring(1);
     const targetElement = document.getElementById(targetId);

     // Scroll to the target section smoothly
     targetElement.scrollIntoView({ behavior: 'smooth' });
   });
 });

 // Intersection Observer to highlight sections
 const observerOptions = {
   root: null, // viewport
   threshold: 0.5, // 50% visibility
 };

 const observerCallback = (entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       // Additional actions can be added here when sections come into view
     }
   });
 };

 const cta_observer = new IntersectionObserver(observerCallback, observerOptions);

 // Observe each section
 document.querySelectorAll('section').forEach(section => cta_observer.observe(section));






//  about me section
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




document.querySelectorAll(".slider").forEach((slider) => {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const dotsContainer = slider.querySelector(".dots");
  const totalSlides = images.length;
  let currentIndex = 0;


 
  
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


//  footer section
//  Adding dynamic year to the footer
const year = new Date().getFullYear();
document.querySelector(
  "footer p"
).textContent = `© ${year} Oduwole Oluwagbemiga. All rights reserved.`;