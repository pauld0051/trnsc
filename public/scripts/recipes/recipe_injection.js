// ------------------------- //
// SECTION: PATH AND INDEX DETECTION //
// ------------------------- //

// Get the current path
const currentPath = window.location.pathname;

// Detect if we are on an index page by checking if the filename starts with "index_" (excluding "all_recipes")
const isIndexPage =
  /index_\w+/.test(currentPath) &&
  !currentPath.includes("index_all_recipes.html");

// Detect if we are on the all recipes page
const isAllRecipesPage = currentPath.includes("index_all_recipes.html");

// Detect if we are on a specific recipe page (i.e., it doesn't start with "index_")
const isRecipePage = !isIndexPage && !isAllRecipesPage;

// Find the recipe list container
const recipeList = document.getElementById("recipe-list");

// Log if the recipe list is found or not for debugging
if (!recipeList && (isIndexPage || isAllRecipesPage)) {
  console.error("Recipe list container missing on page.", recipeList);
}

// ------------------------- //
// SECTION: CATEGORY PAGE RECIPE CARD INJECTION //
// ------------------------- //
else if (isIndexPage) {
  // Extract the category from the URL dynamically (e.g., "snacks" from "index_snacks.html")
  const categoryMatch = currentPath.match(/index_([a-zA-Z_]+)(\.html)?$/);
  const category = categoryMatch ? categoryMatch[1] : null;

  if (!category) {
  } else {
    // Loop through all recipes and inject those that belong to the current category
    Object.keys(recipes).forEach((recipeId) => {
      const recipe = recipes[recipeId];

      // Check if the recipe's category array includes the extracted category
      if (recipe.category.includes(category)) {

        // Dynamically create the recipe card with hidden data attributes for sorting
        const cardHTML = `
          <div class="col-md-4">
            <a href="/views/layouts/recipes/recipe_pages/${recipeId}.html" class="card-link">
                <div class="card mb-4 shadow-sm" data-name="${recipe.title}" 
                data-date="${recipe.date_added}" 
                data-carbs="${parseFloat(recipe.nutrition.carbs)}" 
                data-fibre="${parseFloat(recipe.nutrition.fibre)}" 
                data-protein="${parseFloat(recipe.nutrition.protein)}" 
                data-time="${parseInt(recipe.total_time)}" 
                data-calories="${parseFloat(recipe.nutrition.calories)}" 
                data-fat="${parseFloat(recipe.nutrition.fat)}">
                
                  <!-- Recipe image -->
                  <img src="${recipe.img_src}" class="card-img-top" alt="${
          recipe.title
        }">
                  
                  <!-- Card body with recipe title and description -->
                  <div class="card-body">
                      <h5 class="card-title">${recipe.title}</h5>
                      <p class="card-text">${recipe.description}</p>
                      <p class="card-text"><small class="text-muted">Added on ${
                        recipe.date_added
                      }</small></p>
                  </div>
              </div>
            </a>
          </div>
        `;

        // Inject the card into the recipe list
        recipeList.innerHTML += cardHTML;
      }
    });
  }
}

// ------------------------- //
// SECTION: ALL RECIPES INJECTION //
// ------------------------- //
else if (isAllRecipesPage) {
  // Loop through all recipes and inject them as cards
  Object.keys(recipes).forEach((recipeId) => {
    const recipe = recipes[recipeId];

    // Dynamically create the recipe card with hidden data attributes for sorting
    const cardHTML = `
      <div class="col-md-4">
        <a href="/views/layouts/recipes/recipe_pages/${recipeId}.html" class="card-link">
          <div class="card mb-4 shadow-sm" data-name="${recipe.title}" 
          data-date="${recipe.date_added}" 
          data-carbs="${parseFloat(recipe.nutrition.carbs)}" 
          data-fibre="${parseFloat(recipe.nutrition.fibre)}" 
          data-protein="${parseFloat(recipe.nutrition.protein)}" 
          data-time="${parseInt(recipe.total_time)}" 
          data-calories="${parseFloat(recipe.nutrition.calories)}" 
          data-fat="${parseFloat(recipe.nutrition.fat)}">
          
            <!-- Recipe image -->
            <img src="${recipe.img_src}" class="card-img-top" alt="${
      recipe.title
    }">
            
            <!-- Card body with recipe title and description -->
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <p class="card-text">${recipe.description}</p>
                <p class="card-text"><small class="text-muted">Added on ${
                  recipe.date_added
                }</small></p>
            </div>
          </div>
        </a>
      </div>
    `;

    // Inject the card into the recipe list
    recipeList.innerHTML += cardHTML;
  });
}

// ------------------------- //
// SECTION: RECIPE PAGE INJECTION //
// ------------------------- //
else if (isRecipePage) {
  // Extract the recipeId from the URL dynamically
  const recipeId = currentPath.split("/").pop().replace(".html", "");
  const recipe = recipes[recipeId];

  // Check if the recipe exists
  if (recipe) {
    // Populate the recipe content dynamically
    document.getElementById("recipe-title").innerText = recipe.title;
    document.getElementById("recipe-description").innerText =
      recipe.description;
    document.getElementById("prep-time").innerText = recipe.prep_time;
    document.getElementById("cook-time").innerText = recipe.cook_time;
    document.getElementById("total-time").innerText = recipe.total_time;
    document.getElementById("servings").innerText = recipe.servings;
    document.getElementById("recipe-img").src = recipe.img_src;
    document.getElementById("recipe-img").alt = recipe.title;

    // Ingredients
    const ingredientsList = document.getElementById("ingredients");
    if (recipe.ingredients && recipe.ingredients.length > 0) {
      recipe.ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
      });
    } else {
      console.error("Ingredients are missing.");
    }

    // Method
    const methodList = document.getElementById("method");
    if (recipe.method && recipe.method.length > 0) {
      recipe.method.forEach((step) => {
        const li = document.createElement("li");
        li.innerHTML = step;
        methodList.appendChild(li);
      });
    } else {
      console.error("Method is missing.");
    }

    // Tips (Only if tips exist)
    const tipsSection = document.querySelector(".tips-section");
    const tipsList = document.getElementById("tips");
    if (recipe.tips && recipe.tips.length > 0) {
      recipe.tips.forEach((tip) => {
        const li = document.createElement("li");
        li.innerHTML = tip;
        tipsList.appendChild(li);
      });
    } else {
      // Hide the tips section if there are no tips
      tipsSection.style.display = "none";
    }

    // Nutrition
    const nutritionList = document.getElementById("nutrition");
    if (recipe.nutrition) {
      Object.keys(recipe.nutrition).forEach((key) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${
          key.charAt(0).toUpperCase() + key.slice(1)
        }:</strong> ${recipe.nutrition[key]}`;
        nutritionList.appendChild(li);
      });
    } else {
      console.error("Nutrition information is missing.");
    }

    // Breadcrumb navigation
    const breadcrumb = document.getElementById("breadcrumb");
    if (recipe.category && recipe.category.length > 0) {
      recipe.category.forEach((cat) => {
        const li = document.createElement("li");
        li.classList.add("breadcrumb-item");
        const a = document.createElement("a");

        // Construct the correct link by adding "index_" before the category
        a.href = `/views/layouts/recipes/${cat}/index_${cat}.html`;

        // Replace underscores in the category name and capitalize it for display
        a.innerText = cat.replace("_", " ").toUpperCase();

        li.appendChild(a);
        breadcrumb.appendChild(li);
      });
    }

    const activeLi = document.createElement("li");
    activeLi.classList.add("breadcrumb-item", "active");
    activeLi.setAttribute("aria-current", "page");
    activeLi.innerText = recipe.title;
    breadcrumb.appendChild(activeLi);
  } else {
    console.error("Recipe not found.");
  }
} else {
  console.error("This is not an index page or recipe list element not found.");
}
