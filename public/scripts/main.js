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
