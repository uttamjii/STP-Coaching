// Target the hamburger menu and close button
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navLinks = document.querySelector(".navLinks");
const formData = document.querySelector(".contactForm");

// Target all Nav links
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");

// Target the dialog box and recheck fields
const dialogBox = document.querySelector(".containDailogbox");
const recheckFirstName = document.querySelector(".putFirstName");
const recheckLastName = document.querySelector(".putLastName");
const recheckPhoneNumber = document.querySelector(".putPhoneNumber");
const recheckEmail = document.querySelector(".putEmail");
const recheckMessage = document.querySelector(".putMessage");

// getttin edit and confirm button
const editButton = document.getElementById("editButton");
const confirmButton = document.getElementById("confirmButton");

// target Scroll Up button
const scrollUpButton = document.querySelector(".scrollUpButton");

// Function to toggle the navigation menu

hamburger.addEventListener("click", () => {
  navLinks.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  navLinks.style.left = "-100%";
});
// console.log(formData);

// When Click on any nav link, close the nav menu
function closeNav() {
  navLinks.style.left = "-100%";
}
homeLink.addEventListener("click", closeNav);
aboutLink.addEventListener("click", closeNav);
contactLink.addEventListener("click", closeNav);

// Function to store all input values in array

let form = document.querySelector(".contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // Create FormData object
  let formData = new FormData(form);

  // Log formData key/value pairs
  const forDataArr = [...formData];

  forDataArr.forEach((item) => {
    console.log(item[0], item[1]);
    if (item[0] === "firstName") {
      recheckFirstName.innerText = item[1];
    } else if (item[0] === "lastName") {
      recheckLastName.innerText = item[1];
    } else if (item[0] === "phoneNumber") {
      recheckPhoneNumber.innerText = item[1];
    } else if (item[0] === "email") {
      recheckEmail.innerText = item[1];
    } else if (item[0] === "message") {
      recheckMessage.innerText = item[1];
    } else {
      console.log("No match found");
    }
  });
  dialogBox.style.top = "0";
});

// Function to handle edit button click
editButton.addEventListener("click", () => {
  dialogBox.style.top = "-700%";
});

// Function to handle confirm button click
confirmButton.addEventListener("click", () => {
  dialogBox.style.top = "-700%";
  alert("Form submitted successfully!");
  form.reset(); // Reset the form after confirmation
});

// Scroll Up button

window.addEventListener("scroll", () => { 
  console.log("Scrolled");
});
window.onscroll = function() {
  console.log("Scrolled");
};

document.onscroll = function() {
  console.log("Scrolled");
}

const body = document.querySelector("body");
body.onscroll = function() {
  console.log("Scrolled");
}

console.log(
  'scrollHeight', document.documentElement.scrollHeight,
  'innerHeight', window.innerHeight,
  'canScroll?', document.documentElement.scrollHeight > window.innerHeight
);
console.log(document.documentElement.scrollHeight, window.innerHeight);

window.addEventListener("scroll", () => {
  console.log("Scrolled Y:", window.scrollY);
});

  // if (window.scrollY > 300) {
  //   scrollUpButton.style.bottom = "80px";
  // } else {
  //   scrollUpButton.style.bottom = "-80px";
  // }

scrollUpButton.addEventListener("click", (e) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
