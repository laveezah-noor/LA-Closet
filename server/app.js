const express = require('express');
const app = express();
const cors = require('cors');
const errorMiddleware = require("./middelware/error");

app.use(cors());
app.use(express.json());

const product = require('./routes/productRoutes');

app.use("/api/vi", product);


app.use(errorMiddleware);
// app.use(express.bodyParser())
// var bodyParser = require('body-parser')
// var app = express()

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

module.exports = app;