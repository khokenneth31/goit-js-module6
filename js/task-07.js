// Get the input and span elements
const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

// Add event listener to the font-size-control input
fontSizeControl.addEventListener("input", function () {
  // Update the font size of the text span based on the input value
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});
