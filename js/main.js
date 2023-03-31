// Get Slider Items
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Previous And Next Button
let prevButton = document.querySelector(".prev"); // Previous
let nextButton = document.querySelector(".next"); // Next

// Handle Click on Previous And Next Button
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// Create The Main UL ELement
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

// Create Li ELements
for (let i = 1; i <= slidesCount; i++) {
  // Create The Li
  let paginationItem = document.createElement("li");

  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i);

  // Create Text Node
  let liText = document.createTextNode(i);

  // Append.
  paginationItem.appendChild(liText);
  paginationElement.appendChild(paginationItem);
}

// Append The Main Ul ELement To Indicators
document.querySelector(".indicators").appendChild(paginationElement);

// Get The New Created Ul
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get Pagination  Items
let paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through All Bullets Item
for (let i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

// Trigger The Checker Function
theChecker();

// Previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// Create The Checker Function
function theChecker() {
  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check If The Current SLide Is The First
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  // Check If The Current SLide Is The Last
  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// Remove ALl Active Classes From Images + Pagination Items
function removeAllActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
