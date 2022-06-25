const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.get("/products", (req, res) => {
  const products = [
    {
      nama: "Product 1",
      price: 2000,
    },
    {
      nama: "Product 2",
      price: 4500,
    },
  ];
  return res.json(products);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
