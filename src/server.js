const express = require('express')
const home = require('./routes/home.js')
const login = require('./routes/log-in.js')
const signup = require('./routes/sign-up.js')

const body = express.urlencoded({ extended: true })
const server = express()

server.use((req, res, next) => {
  const time = new Date().toLocaleTimeString('en-GB')
  console.log(`${time} ${req.method} ${req.url}`)
  next()
})

server.get('/', home.get)
server.get('/sign-up', signup.get)
server.post('/sign-up', body, signup.post)
server.get('/log-in', login.get)
server.post("/", body, home.post);

module.exports = server
