// Add interactivity if needed
console.log("Pranaayu loaded successfully!");

document.getElementsByClassName("btn" )[0].addEventListener("click", function() {
  window.location.href = "login.html", _blank;
});


// Get the button elements
const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');
const doctorLoginBtn = document.getElementById('doctor-login-btn');

signUpBtn.addEventListener('click', () => {
  window.open('#', '_blank');
});

doctorLoginBtn.addEventListener('click', () => {
  window.open('doctorlogin.html', '_blank');
});