const express = require("express");
const { engine } = require("express-handlebars"); // Updated import for handlebars
const path = require("path");

const app = express();

// Set up Handlebars as the view engine
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main", // Main layout (views/layouts/main.handlebars)
    partialsDir: path.join(__dirname, "views/partials"), // Directory for partials
  })
);
app.set("view engine", "handlebars");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Define routes for different pages
app.get("/", (req, res) => {
  res.render("index", { title: "The Real Naked Swedish Chef" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
