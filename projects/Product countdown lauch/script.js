// Target launch date and time for the countdown
const launchDate = new Date("2025-12-31T00:00:00Z").getTime();

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML elements with the countdown values
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();  // Initial call to set the initial countdown values





let slideIndex = 0;

// Function to display the specified slide based on the given index
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  
  // Handle looping to the first slide if index exceeds the number of slides
  if (index >= slides.length) {
    slideIndex = 0;
  } 
  // Handle looping to the last slide if index is negative
  else if (index < 0) {
    slideIndex = slides.length - 1;
  } 
  // Set the slide index to the specified index
  else {
    slideIndex = index;
  }

  // Translate slides to show the current slide
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${-slideIndex * 100}%)`;
  });

  // Toggle visibility of navigation buttons based on current slide
  toggleNavButtons();
}

// Function to move to the next slide
function nextSlide() {
  showSlide(slideIndex + 1);
}

// Function to move to the previous slide
function prevSlide() {
  showSlide(slideIndex - 1);
}

// Function to toggle visibility of navigation buttons based on current slide
function toggleNavButtons() {
  const prevButton = document.querySelector('.slider-nav button:first-child');
  const nextButton = document.querySelector('.slider-nav button:last-child');
  
  // Implement code here to toggle the visibility of navigation buttons based on slideIndex
}

// Initial call to display the first slide
showSlide(slideIndex);

