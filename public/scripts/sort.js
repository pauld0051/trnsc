function sortRecipes() {
  const select = document.getElementById("sort-select");
  const recipeList = document.getElementById("recipe-list");
  const recipes = Array.from(recipeList.getElementsByClassName("col-md-4")); // Target columns, not just cards

  const sortOption = select.value;

  let sortedRecipes = [];

  if (sortOption === "alphabetical-asc") {
    sortedRecipes = recipes.sort((a, b) => {
      const nameA = a.querySelector(".card").getAttribute("data-name") || "";
      const nameB = b.querySelector(".card").getAttribute("data-name") || "";
      return nameA.localeCompare(nameB);
    });
  } else if (sortOption === "alphabetical-desc") {
    sortedRecipes = recipes.sort((a, b) => {
      const nameA = a.querySelector(".card").getAttribute("data-name") || "";
      const nameB = b.querySelector(".card").getAttribute("data-name") || "";
      return nameB.localeCompare(nameA);
    });
  } else if (sortOption === "date-added") {
    sortedRecipes = recipes.sort((a, b) => {
      const dateA =
        new Date(a.querySelector(".card").getAttribute("data-date")) || 0;
      const dateB =
        new Date(b.querySelector(".card").getAttribute("data-date")) || 0;
      return dateB - dateA;
    });
  } else if (sortOption === "carbs-lowest") {
    sortedRecipes = recipes.sort((a, b) => {
      const carbsA =
        parseFloat(a.querySelector(".card").getAttribute("data-carbs")) || 0;
      const carbsB =
        parseFloat(b.querySelector(".card").getAttribute("data-carbs")) || 0;
      return carbsA - carbsB;
    });
  } else if (sortOption === "carbs-highest") {
    sortedRecipes = recipes.sort((a, b) => {
      const carbsA =
        parseFloat(a.querySelector(".card").getAttribute("data-carbs")) || 0;
      const carbsB =
        parseFloat(b.querySelector(".card").getAttribute("data-carbs")) || 0;
      return carbsB - carbsA;
    });
  } else if (sortOption === "fibre-highest") {
    sortedRecipes = recipes.sort((a, b) => {
      const fibreA =
        parseFloat(a.querySelector(".card").getAttribute("data-fibre")) || 0;
      const fibreB =
        parseFloat(b.querySelector(".card").getAttribute("data-fibre")) || 0;
      return fibreB - fibreA;
    });
  } else if (sortOption === "protein-highest") {
    sortedRecipes = recipes.sort((a, b) => {
      const proteinA =
        parseFloat(a.querySelector(".card").getAttribute("data-protein")) || 0;
      const proteinB =
        parseFloat(b.querySelector(".card").getAttribute("data-protein")) || 0;
      return proteinB - proteinA;
    });
  } else if (sortOption === "time-shortest") {
    sortedRecipes = recipes.sort((a, b) => {
      const timeA =
        parseInt(a.querySelector(".card").getAttribute("data-time")) || 0;
      const timeB =
        parseInt(b.querySelector(".card").getAttribute("data-time")) || 0;
      return timeA - timeB;
    });
  } else if (sortOption === "calories-lowest") {
    sortedRecipes = recipes.sort((a, b) => {
      const caloriesA =
        parseFloat(a.querySelector(".card").getAttribute("data-calories")) || 0;
      const caloriesB =
        parseFloat(b.querySelector(".card").getAttribute("data-calories")) || 0;
      return caloriesA - caloriesB;
    });
  } else if (sortOption === "calories-highest") {
    sortedRecipes = recipes.sort((a, b) => {
      const caloriesA =
        parseFloat(a.querySelector(".card").getAttribute("data-calories")) || 0;
      const caloriesB =
        parseFloat(b.querySelector(".card").getAttribute("data-calories")) || 0;
      return caloriesB - caloriesA;
    });
  } else if (sortOption === "fat-lowest") {
    sortedRecipes = recipes.sort((a, b) => {
      const fatA =
        parseFloat(a.querySelector(".card").getAttribute("data-fat")) || 0;
      const fatB =
        parseFloat(b.querySelector(".card").getAttribute("data-fat")) || 0;
      return fatA - fatB;
    });
  } else if (sortOption === "fat-highest") {
    sortedRecipes = recipes.sort((a, b) => {
      const fatA =
        parseFloat(a.querySelector(".card").getAttribute("data-fat")) || 0;
      const fatB =
        parseFloat(b.querySelector(".card").getAttribute("data-fat")) || 0;
      return fatB - fatA;
    });
  } else if (sortOption === "random") {
    sortedRecipes = recipes.sort(() => Math.random() - 0.5); // Shuffle the array randomly
  }

  // Temporarily hide the recipe list to force a reflow
  recipeList.style.display = "none";

  // Clear the current list and append sorted items
  recipeList.innerHTML = "";
  sortedRecipes.forEach((recipe) => recipeList.appendChild(recipe));

  // Revert to display the list after sorting
  recipeList.style.display = "flex";
}

// Add event listener to force random sorting even if already selected
document.getElementById("sort-select").addEventListener("change", function () {
  const select = document.getElementById("sort-select");
  if (select.value === "random") {
    sortRecipes(); // Call the function again when "random" is clicked
  }
});

// Add click event listener specifically for the random option
document.getElementById("sort-select").addEventListener("click", function () {
  const select = document.getElementById("sort-select");
  if (select.value === "random") {
    sortRecipes(); // Trigger the randomization when clicked again
  }
});
