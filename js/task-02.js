const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Get the ul element by its id
const ulIngredients = document.getElementById("ingredients");

// Create and append li elements for each ingredient
ingredients.forEach((ingredient) => {
  // Create a new li element
  const li = document.createElement("li");

  // Set the text content to the current ingredient
  li.textContent = ingredient;

  // Add the "item" class to the li element
  li.classList.add("item");

  // Append the li element to the ul element
  ulIngredients.appendChild(li);
});

// Log the ul element with all li elements
console.log(ulIngredients);
