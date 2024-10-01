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
  }

  // Temporarily hide the recipe list to force a reflow
  recipeList.style.display = "none";

  // Clear the current list and append sorted items
  recipeList.innerHTML = "";
  sortedRecipes.forEach((recipe) => recipeList.appendChild(recipe));

  // Revert to display the list after sorting
  recipeList.style.display = "flex";
}
