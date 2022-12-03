require('dotenv').config()
const connection = require('./db');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const express = require('express');

const app = require('./app');

connection();

app.use(cors());
app.use(express.json());


// app.get('/products', authenticateToken, (req, res) => {
//     res.json(posts.filter(post => post.username === req.user.name))
//   })

//   function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)
  
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//       if (err) return res.sendStatus(403)
//       req.user = user
//       next()
//     })
//   }
  


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`)); 