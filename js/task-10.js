function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes() {
  const amountInput = document.getElementById("amountInput");
  const amount = parseInt(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}
