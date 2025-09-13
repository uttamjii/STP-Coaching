// Target the hamburger menu and close button
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navLinks = document.querySelector(".navLinks");
const formData = document.querySelector(".contactForm");

const dialogBox = document.querySelector(".containDailogbox");
const recheckFirstName = document.querySelector(".putFirstName");
const recheckLastName = document.querySelector(".putLastName");
const recheckPhoneNumber = document.querySelector(".putPhoneNumber");
const recheckEmail = document.querySelector(".putEmail");
const recheckMessage = document.querySelector(".putMessage");

// getttin edit and confirm button
const editButton = document.getElementById("editButton");
const confirmButton = document.getElementById("confirmButton");


// Function to toggle the navigation menu

hamburger.addEventListener("click", () => {
  navLinks.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  navLinks.style.left = "-100%";
});
console.log(formData);

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
  dialogBox.style.top = "-100%";
});

// Function to handle confirm button click
confirmButton.addEventListener("click", () => {
  dialogBox.style.top = "-100%";
  alert("Form submitted successfully!");
  form.reset(); // Reset the form after confirmation
}); 
