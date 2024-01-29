document
  .getElementById("validation-input")
  .addEventListener("blur", function () {
    validateInput(this);
  });

function validateInput(input) {
  const enteredValue = input.value.trim();
  const expectedLength = parseInt(input.getAttribute("data-length"));

  if (enteredValue.length === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
