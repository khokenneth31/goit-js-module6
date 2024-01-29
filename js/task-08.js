document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const emailInput = loginForm.elements["email"];
    const passwordInput = loginForm.elements["password"];

    // Check if fields are empty
    if (!emailInput.value || !passwordInput.value) {
      alert("Please fill in all fields.");
      return;
    }

    // Collect field values into an object
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Display the object in the console
    console.log(formData);

    // Clear form fields
    loginForm.reset();
  });
});
