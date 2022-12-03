require('dotenv').config()
const connection = require('./db');
const jwt = require('jsonwebtoken')
const express = require('express');

process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}\nShutting down the server due to uncaught exception`);
    process.exit(1);
})

const app = require('./app');
// var bodyParser = require('body-parser')

connection();

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

const server = app.listen(port, () => console.log(`Server started on port ${port}`)); 

process.on("unhandledRejection", (err)=>{
    console.log(
        `Error: ${err.message}\nShutting down the server due to unhandled promise rejection`
    )
    server.close(()=>{
        process.exit(1);
    })
})