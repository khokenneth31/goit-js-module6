const categoriesList = document.getElementById("categories");

// Get all li.item elements within ul#categories
const categoryItems = categoriesList.querySelectorAll(".item");

// Display the number of categories
console.log("Number of categories:", categoryItems.length);

// Iterate through each category item
categoryItems.forEach((item) => {
  // Get the category name (header text)
  const categoryName = item.querySelector("h2").textContent;

  // Get the number of elements in the category (nested li elements)
  const categoryElements = item.querySelectorAll("ul li").length;

  // Display category information in the console
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
