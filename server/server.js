const conection = require('./db');
const cors = require('cors');
const express = require('express');
const app = express();

conection();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`)); 