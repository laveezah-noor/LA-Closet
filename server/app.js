const express = require('express');
const app = express();

const product = require('./routes/productRoutes');

app.use("/api/vi", product);

module.exports = app;