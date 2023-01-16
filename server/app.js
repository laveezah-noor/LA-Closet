const express = require('express');
const app = express();
const cors = require('cors');
const errorMiddleware = require("./middelware/error");
const product = require('./routes/productRoutes');
const user = require('./routes/userRoutes');
const order = require('./routes/orderRoutes');
const cookieParser = require('cookie-parser');


app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use("/api/vi", product);
app.use("/api/vi", user);
app.use("/api/vi", order);




app.use(errorMiddleware);
// app.use(express.bodyParser())
// var bodyParser = require('body-parser')
// var app = express()

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

module.exports = app;