// ------------------------- //
// SECTION: PATH AND INDEX DETECTION //
// ------------------------- //

// Get the current path
const currentPath = window.location.pathname;

// Log the current path for debugging
console.log("Current Path:", currentPath);

// Detect if we are on an index page by checking if the filename starts with "index_"
const isIndexPage = /index_\w+/.test(currentPath);
const recipeList = document.getElementById("recipe-list");

// Log if the recipe list is found or not for debugging
if (!recipeList && isIndexPage) {
  console.error("Recipe list container missing on index page.", recipeList);
} else if (isIndexPage) {
  console.log("Recipe list container found on index page.", recipeList);

  // Extract the category from the URL dynamically (e.g., "snacks" from "index_snacks.html")
  const categoryMatch = currentPath.match(/index_([a-zA-Z]+)\.html/);
  const category = categoryMatch ? categoryMatch[1] : null;

  // Log the extracted category for debugging
  console.log("Extracted category:", category);

  if (!category) {
    console.error("Could not extract category from URL.");
  } else {
    // ------------------------- //
    // SECTION: INDEX PAGE RECIPE CARD INJECTION //
    // ------------------------- //

    // Loop through all recipes and inject those that belong to the current category
    Object.keys(recipes).forEach((recipeId) => {
      const recipe = recipes[recipeId];

      // Check if the recipe's category array includes the extracted category
      if (recipe.category.includes(category)) {
        console.log(`Injecting card for recipe: ${recipe.title}`);

        // Dynamically create the recipe card with hidden data attributes for sorting
        const cardHTML = `
          <div class="col-md-4">
            <a href="/views/layouts/recipes/${category}/${recipeId}.html" class="card-link">
                <div class="card mb-4 shadow-sm" data-name="${recipe.title}" 
                data-date="${recipe.date_added}" 
                data-carbs="${parseFloat(recipe.nutrition.carbs)}" 
                data-fibre="${parseFloat(recipe.nutrition.fibre)}" 
                data-protein="${parseFloat(recipe.nutrition.protein)}" 
                data-time="${parseInt(recipe.total_time)}" 
                data-calories="${parseFloat(recipe.nutrition.calories)}" 
                data-fat="${parseFloat(recipe.nutrition.fat)}">
                
                  <!-- Recipe image -->
                  <img src="${recipe.img_src}" class="card-img-top" alt="${recipe.title}">
                  
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

    console.log("All relevant recipes have been injected.");
  }
}
// ------------------------- //
// SECTION: RECIPE PAGE INJECTION //
// ------------------------- //
else if (!isIndexPage) {
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
    recipe.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.innerText = ingredient;
      ingredientsList.appendChild(li);
    });

    // Method
    const methodList = document.getElementById("method");
    recipe.method.forEach((step) => {
      const li = document.createElement("li");
      li.innerText = step;
      methodList.appendChild(li);
    });

    // Nutrition
    const nutritionList = document.getElementById("nutrition");
    Object.keys(recipe.nutrition).forEach((key) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${
        key.charAt(0).toUpperCase() + key.slice(1)
      }:</strong> ${recipe.nutrition[key]}`;
      nutritionList.appendChild(li);
    });

    // Breadcrumb navigation
    const breadcrumb = document.getElementById("breadcrumb");
    recipe.category.forEach((cat) => {
      const li = document.createElement("li");
      li.classList.add("breadcrumb-item");
      const a = document.createElement("a");
      a.href = `/views/layouts/recipes/${cat}/index.html`;
      a.innerText = cat.replace("_", " ").toUpperCase();
      li.appendChild(a);
      breadcrumb.appendChild(li);
    });
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
