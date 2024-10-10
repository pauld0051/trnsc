document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  fetch("/views/partials/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  // Load Footer
  fetch("/views/partials/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
      // Dynamically update the year for the copyright
      document.getElementById("year").textContent = new Date().getFullYear();
    });
});

// ------------------ //
// ' ' ' SEARCH ' ' ' //
// ------------------ //
function handleSearch(event) {
  event.preventDefault(); // Prevent form from submitting the usual way
  const query = document.getElementById("search-input").value.trim();
  if (query) {
    // Redirect to the search page with the query as a URL parameter
    window.location.href = `/views/layouts/recipes/index_search.html?query=${encodeURIComponent(
      query
    )}`;
  }
}

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function injectSearchResults() {
  const query = getQueryParam("query");
  if (!query) {
    return; // No query present
  }

  const searchTerm = query.toLowerCase();
  const results = [];

  // Loop through all recipes and find matches
  Object.keys(recipes).forEach((recipeId) => {
    const recipe = recipes[recipeId];

    // Search within title, description, categories, or ingredients
    const matchesTitle = recipe.title.toLowerCase().includes(searchTerm);
    const matchesDescription = recipe.description
      .toLowerCase()
      .includes(searchTerm);
    const matchesCategory = recipe.category.some((cat) =>
      cat.toLowerCase().includes(searchTerm)
    );
    const matchesIngredient = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm)
    );

    if (
      matchesTitle ||
      matchesDescription ||
      matchesCategory ||
      matchesIngredient
    ) {
      results.push({ recipeId, recipe }); // Store the recipeId along with the recipe data
    }
  });

  // Display the search results
  const recipeList = document.getElementById("recipe-list");
  if (results.length === 0) {
    recipeList.innerHTML =
      '<div class="col-12"><h3>No recipes found, sorry.</h3></div>';
  } else {
    results.forEach(({ recipeId, recipe }) => {
      // Use recipeId to generate correct URLs
      const cardHTML = `
        <div class="col-md-4">
          <a href="/views/layouts/recipes/recipe_pages/${recipeId}.html" class="card-link">
            <div class="card mb-4 shadow-sm" 
              data-name="${recipe.title}" 
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
      recipeList.innerHTML += cardHTML;
    });
  }
}

// Call the function to inject search results when the search page loads
injectSearchResults();

// Inject the Back to Top button on page load
document.addEventListener("DOMContentLoaded", function () {
  // Create the Back to Top button
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "back-to-top-btn";
  backToTopBtn.className = "back-to-top";
  
  // Use the local SVG icon for the button
  backToTopBtn.innerHTML = `<img src="/public/images/icons/up_arrow.svg" alt="Scroll to top" class="up-arrow-icon">`;
  
  backToTopBtn.style.display = "none"; // Hidden by default
  backToTopBtn.setAttribute("aria-label", "Scroll to top");

  // Append the button to the body
  document.body.appendChild(backToTopBtn);

  // Show the button when the user scrolls down 300px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Scroll to the top of the page when the button is clicked
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Initialize all popovers on the page
document.addEventListener("DOMContentLoaded", function () {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});

// Inject Google Tag
const gtagScript = document.createElement('script');
gtagScript.src = "/public/scripts/gtag.js"; // Adjust the path if needed
document.head.appendChild(gtagScript);



