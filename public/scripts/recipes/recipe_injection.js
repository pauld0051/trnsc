// --------------------------------- //
// SECTION: PATH AND INDEX DETECTION //
// --------------------------------- //

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

// ----------------------------------------- //
// SECTION: INDEX PAGE RECIPE CARD INJECTION //
// ----------------------------------------- //
if (isIndexPage || isAllRecipesPage) {
  const recipeList = document.getElementById("recipe-list");

  if (!recipeList) {
    console.error("Recipe list container missing on page.");
  } else {
    // Inject the correct recipe cards for index or all recipes
    injectRecipeCards();
  }
}

// ------------------------------ //
// SECTION: RECIPE PAGE INJECTION //
// ------------------------------ //
if (isRecipePage) {
  // Extract the recipeId from the URL dynamically
  const recipeId = currentPath.split("/").pop().replace(".html", "");
  const recipe = recipes[recipeId];

  // Check if the recipe exists
  if (recipe) {
    // Inject Recipe Content
    injectRecipeContent(recipe);
  } else {
    console.error("Recipe not found.");
  }
}

// ------------------------- //
// FUNCTION: Inject Recipe Cards on Index Pages by Category //
// ------------------------- //
function injectRecipeCards() {
  const recipeList = document.getElementById("recipe-list");

  if (!recipeList) {
    console.error("Recipe list container missing on page.");
    return;
  }

  // Extract the category from the URL dynamically (e.g., "snacks" from "index_snacks.html")
  const categoryMatch = currentPath.match(/index_([a-zA-Z_]+)(\.html)?$/);
  const category = categoryMatch ? categoryMatch[1] : null;

  // Check if we are on the "all_recipes" page
  const isAllRecipesPage = currentPath.includes("index_all_recipes.html");

  if (isAllRecipesPage) {
    // Inject all recipes if we are on the "all_recipes" page
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
  } else if (category) {
    // Inject only recipes belonging to the current category for other index pages
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
  } else {
    console.error("No category found in the URL.");
  }
}

// ------------------------- //
// FUNCTION: Inject Recipe Content on Recipe Pages //
// ------------------------- //
function injectRecipeContent(recipe) {
  // Populate the recipe content dynamically
  document.getElementById("recipe-title").innerText = recipe.title;
  document.getElementById("recipe-description").innerHTML = recipe.description;
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
    li.innerHTML = ingredient;
    ingredientsList.appendChild(li);
  });

  // Method
  const methodList = document.getElementById("method");
  recipe.method.forEach((step) => {
    const li = document.createElement("li");

    // If step contains bolded text, treat it as a subheading
    if (step.startsWith("<strong>")) {
      const subheading = document.createElement("p");
      subheading.innerHTML = step;
      methodList.appendChild(subheading);
    } else {
      li.innerHTML = step;
      methodList.appendChild(li);
    }
  });

  // Tips (only if tips exist)
  const tipsSection = document.querySelector(".tips-section");
  const tipsList = document.getElementById("tips");
  if (recipe.tips && recipe.tips.length > 0) {
    recipe.tips.forEach((tip) => {
      const li = document.createElement("li");
      li.innerHTML = tip;
      tipsList.appendChild(li);
    });
  } else {
    tipsSection.style.display = "none";
  }

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
    a.href = `/views/layouts/recipes/${cat}/index_${cat}.html`;
    a.innerText = cat.replace("_", " ").toUpperCase();
    li.appendChild(a);
    breadcrumb.appendChild(li);
  });

  const activeLi = document.createElement("li");
  activeLi.classList.add("breadcrumb-item", "active");
  activeLi.setAttribute("aria-current", "page");
  activeLi.innerText = recipe.title;
  breadcrumb.appendChild(activeLi);
}

// Keep Screen Awake
let wakeLock = null;

async function requestWakeLock() {
  if ("wakeLock" in navigator) {
    // Check if the API is supported
    try {
      wakeLock = await navigator.wakeLock.request("screen");
      wakeLock.addEventListener("release", () => {});
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  } else {
    alert("Wake Lock API not supported in this browser.");
  }
}

function releaseWakeLock() {
  if (wakeLock !== null) {
    wakeLock.release();
    wakeLock = null;
  }
}

function toggleWakeLock() {
  const switchLabel = document.getElementById("wake-lock-label");
  const wakeLockToggle = document.getElementById("wake-lock-toggle");

  if (wakeLockToggle.checked) {
    requestWakeLock();
    switchLabel.innerText = "Turn Off Screen Awake"; // Change label text when enabled
    switchLabel.classList.add("active");
  } else {
    releaseWakeLock();
    switchLabel.innerText = "Keep Screen Awake"; // Revert label text when disabled
    switchLabel.classList.remove("active");
  }
}

// Listen for visibility change to reapply wake lock if needed
document.addEventListener("visibilitychange", () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    requestWakeLock();
  }
});
