document.addEventListener("DOMContentLoaded", () => {
  const latestArticlesList = document.getElementById("latest-articles-list");

  // Set the number of articles to display (adjustable)
  const numberOfArticlesToShow = 6;

  // Combine all articles into one array
  const allArticles = [
    ...(science_articles || []),
    ...(kitchen_articles || []),
    ...(health_articles || []),
  ];

  // Sort articles by date in descending order (newest first)
  const sortedArticles = allArticles.sort(
    (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
  );

  // Get the desired number of newest articles
  const latestArticles = sortedArticles.slice(0, numberOfArticlesToShow);

  // Populate the list in HTML
  latestArticles.forEach((article) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "d-flex", "align-items-center");

    // Add "New" icon to each article
    const newIcon = document.createElement("img");
    newIcon.src = "/public/images/icons/new-1.svg"; // Path to "New" icon
    newIcon.alt = "New Icon";
    newIcon.classList.add("me-2"); // Adds margin for spacing

    // Add link with article title
    const link = document.createElement("a");
    link.href = article.link || "#"; // Use link if available
    link.textContent = article.title || "Untitled";

    // Append icon and link to list item
    listItem.appendChild(newIcon);
    listItem.appendChild(link);

    // Append the list item to the list
    latestArticlesList.appendChild(listItem);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const latestItemsList = document.getElementById("latest-items-list");

  // Set the number of recipes to display (adjustable)
  const numberOfRecipesToShow = 5;

  // Convert recipes object to an array and sort by date
  const sortedRecipes = Object.values(recipes)
    .sort((a, b) => new Date(b.date_added) - new Date(a.date_added))
    .slice(0, numberOfRecipesToShow);

  // Populate the list in HTML
  sortedRecipes.forEach((recipe) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "d-flex", "align-items-center");

    // Add "New" icon to each recipe
    const newIcon = document.createElement("img");
    newIcon.src = "/public/images/icons/new-1.svg"; // Path to "New" icon
    newIcon.alt = "New Icon";
    newIcon.classList.add("me-2"); // Adds margin for spacing

    // Generate link based on recipe name
    const recipeKey = Object.keys(recipes).find(
      (key) => recipes[key] === recipe
    );
    const link = document.createElement("a");
    link.href = `/views/layouts/recipes/recipe_pages/${recipeKey}.html`;
    link.textContent = recipe.title;

    // Append icon and link to list item
    listItem.appendChild(newIcon);
    listItem.appendChild(link);

    // Append the list item to the list
    latestItemsList.appendChild(listItem);
  });
});
