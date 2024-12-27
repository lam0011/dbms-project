// Sample username and password (for demonstration purposes)
const username = "admin";
const password = "password";

// Function to handle sign-in form submission
function signIn(event) {
  event.preventDefault();
  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  // Check if entered username and password are correct
  if (enteredUsername === username && enteredPassword === password) {
    // Redirect to home page
    window.location.href = "home.html";
  } else {
    // Display error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Incorrect username or password. Please try again.";
  }
}

// Event listener for sign-in form submission
window.onload = function() {
  const signInForm = document.getElementById("signin-form");
  signInForm.addEventListener("submit", signIn);
};
