// Function to inject articles into the page
function injectArticles(articleData) {
  const articleList = document.getElementById("article-list");
  articleList.innerHTML = "";

  articleData.forEach((article) => {
    const articleHTML = `
      <div class="col-md-12 mb-4">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${article.image}" class="img-fluid rounded-start" alt="${article.title}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <p class="card-text"><small class="text-muted">Added on ${article.dateAdded}</small></p>
                <a href="${article.link}" class="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    articleList.innerHTML += articleHTML;
  });
}

// Initial injection of kitchen articles
injectArticles(kitchen_articles);

// Sorting function
document.getElementById("sort-options").addEventListener("change", function () {
  const sortBy = this.value;

  if (sortBy === "date") {
    kitchen_articles.sort(
      (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
    ); // Newest to Oldest
  } else if (sortBy === "alphabetical") {
    kitchen_articles.sort((a, b) => a.title.localeCompare(b.title)); // Alphabetical order
  }

  injectArticles(kitchen_articles);
});

// Search function
document.getElementById("search-input").addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filteredArticles = kitchen_articles.filter(
    (article) =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query)
  );

  injectArticles(filteredArticles);
});
