const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// const cors = require('cors');
const cors = require("cors");

const chef = require("./data/chef.json");
const recipes = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hy Hello World!");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

// app.get('/recipes', (req, res) => {
//   res.send(recipes)
// })

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectChef = recipes.filter((n) => parseInt(n.id) === id);
  res.send(selectChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
