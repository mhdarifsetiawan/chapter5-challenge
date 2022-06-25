const express = require("express");
const { getUsers } = require("./users/users.service");
const { getProducts } = require("./products/products.service");
const app = express();
const port = 3000;

// APLIKASI USER MANAGEMENT

// get user
app.get("/users", getUsers);

// get product
app.get("/products", getProducts);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
