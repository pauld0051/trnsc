function sortRecipes() {
  const select = document.getElementById("sort-select");
  const recipeList = document.getElementById("recipe-list");
  const recipes = Array.from(recipeList.getElementsByClassName("col-md-4")); // Target columns, not just cards

  const sortOption = select.value;

  let sortedRecipes = [];

  if (sortOption === "alphabetical-asc") {
    sortedRecipes = recipes.sort((a, b) =>
      a
        .querySelector(".card")
        .getAttribute("data-name")
        .localeCompare(b.querySelector(".card").getAttribute("data-name"))
    );
  } else if (sortOption === "alphabetical-desc") {
    sortedRecipes = recipes.sort((a, b) =>
      b
        .querySelector(".card")
        .getAttribute("data-name")
        .localeCompare(a.querySelector(".card").getAttribute("data-name"))
    );
  } else if (sortOption === "date-added") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        new Date(b.querySelector(".card").getAttribute("data-date")) -
        new Date(a.querySelector(".card").getAttribute("data-date"))
    );
  } else if (sortOption === "carbs-lowest") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        a.querySelector(".card").getAttribute("data-carbs") -
        b.querySelector(".card").getAttribute("data-carbs")
    );
  } else if (sortOption === "carbs-highest") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        b.querySelector(".card").getAttribute("data-carbs") -
        a.querySelector(".card").getAttribute("data-carbs")
    );
  } else if (sortOption === "fibre-highest") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        b.querySelector(".card").getAttribute("data-fibre") -
        a.querySelector(".card").getAttribute("data-fibre")
    );
  } else if (sortOption === "protein-highest") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        b.querySelector(".card").getAttribute("data-protein") -
        a.querySelector(".card").getAttribute("data-protein")
    );
  } else if (sortOption === "time-shortest") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        a.querySelector(".card").getAttribute("data-time") -
        b.querySelector(".card").getAttribute("data-time")
    );
  } else if (sortOption === "calories-lowest") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        a.querySelector(".card").getAttribute("data-calories") -
        b.querySelector(".card").getAttribute("data-calories")
    );
  } else if (sortOption === "calories-highest") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        b.querySelector(".card").getAttribute("data-calories") -
        a.querySelector(".card").getAttribute("data-calories")
    );
  } else if (sortOption === "fat-lowest") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        a.querySelector(".card").getAttribute("data-fat") -
        b.querySelector(".card").getAttribute("data-fat")
    );
  } else if (sortOption === "fat-highest") {
    sortedRecipes = recipes.sort(
      (a, b) =>
        b.querySelector(".card").getAttribute("data-fat") -
        a.querySelector(".card").getAttribute("data-fat")
    );
  } else if (sortOption === "random") {
    // Shuffle the array on every click
    sortedRecipes = recipes.sort(() => Math.random() - 0.5);
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
