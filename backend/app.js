//code ni sir
// const express = require('express');
// const app = express();

// app.use(express.json());

// const products = require('./routes/product');

// app.use('/api/v1',products);

// module.exports = app

//code ni gab
const express = require("express"),
app = express(),
products = require("./routes/product");

app.use(express.json());
app.use("/api/v1", products);
module.exports = app;