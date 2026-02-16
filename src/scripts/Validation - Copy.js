function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
}
function register() {
  // Get form elements
  let firstName = document.forms["registrationForm"]["firstName"].value;
  let lastName = document.forms["registrationForm"]["lastName"].value;
  let mobile = document.forms["registrationForm"]["mobile"].value;
  let hearAboutUs = document.forms["registrationForm"]["hearAboutUs"].value;

  // Check if fields are empty
  if (firstName === "") {
    alert("First name must be filled out");
  }
  if (lastName === "") {
    alert("Last name must be filled out");
  }
  if (mobile === "") {
    alert("Mobile number must be filled out");
  }

  // Check if mobile number is valid
  if (!/^\d+$/.test(mobile)) {
    alert("Please enter a valid mobile number");
  }
  // Check if an option is selected
  if (hearAboutUs === "") {
    alert("Please select an option for 'How did you hear about us?'");
  }
  // Check if checkboxes are checked
  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      alert("All checkboxes must be checked");
    }
  }
  alert("Registered Successfully!");
}
