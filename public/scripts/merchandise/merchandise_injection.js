// Check if we're on localhost
// Check if we're on localhost or 127.0.0.1
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Initialise product list on load
document.addEventListener("DOMContentLoaded", () => {
  const sortedProducts = [...products].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  displayProducts(sortedProducts);
  if (isLocalhost) enablePopovers(); // Enable popovers only if local
});

// Display products as a table for consistent column widths
function displayProducts(items) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Clear current content

  // Create the table structure
  const table = document.createElement("table");
  table.classList.add("table", "table-bordered", "table-striped");

  // Create table header, conditionally adding "Action" column
  const header = document.createElement("thead");
  header.innerHTML = `
    <tr>
      <th style="width: 50%;">Product Name</th>
      <th style="width: 25%;">Amazon EU/UK</th>
      <th style="width: 25%;">Amazon US/Can</th>
      ${isLocalhost ? '<th style="width: 10%;">Action</th>' : ""}
    </tr>
  `;
  table.appendChild(header);

  // Create table body
  const body = document.createElement("tbody");
  items.forEach((product, index) => {
    const row = document.createElement("tr");

    // Row content, conditionally adding "Action" button
    row.innerHTML = `
      <td>${product.name}</td>
      <td><a href="${product.linkEU}" target="_blank">(Amazon EU/UK)</a></td>
      <td><a href="${product.linkUS}" target="_blank">(Amazon US/Can)</a></td>
      ${
        isLocalhost
          ? `<td>
              <button type="button" class="btn btn-outline-primary btn-sm copy-btn" 
                      data-bs-toggle="popover" data-bs-trigger="manual" 
                      data-bs-content="Copied!" onclick="copyLink('${product.name}', this)">
                  Copy
              </button>
            </td>`
          : ""
      }
    `;
    body.appendChild(row);
  });

  table.appendChild(body);
  productList.appendChild(table);

  if (isLocalhost) enablePopovers(); // Re-enable popovers only if local
}

// Sort products
function sortProducts() {
  const sortOption = document.getElementById("sortSelect").value;
  const sortedProducts = [...products].sort((a, b) => {
    return sortOption === "alphabetical-asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });
  displayProducts(sortedProducts);
}

// Search/filter products
function filterProducts() {
  const searchText = document.getElementById("searchBox").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );
  displayProducts(filteredProducts);
}

// Enable Bootstrap popovers
function enablePopovers() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  popoverTriggerList.forEach((popoverTriggerEl) => {
    new bootstrap.Popover(popoverTriggerEl);
  });
}

// Copy link to clipboard and show popover
function copyLink(name, button) {
  const product = products.find((p) => p.name === name);
  if (product) {
    const linkText = `${product.name} <a href='${product.linkEU}' target='_blank'>(Amazon EU/UK)</a> or <a href='${product.linkUS}' target='_blank'>(Amazon US/Can)</a>`;
    navigator.clipboard.writeText(linkText).then(() => {
      const popover = bootstrap.Popover.getInstance(button);
      popover.show();

      // Hide the popover after 3 seconds
      setTimeout(() => {
        popover.hide();
      }, 3000);
    });
  }
}
