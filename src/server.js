const express = require('express')
const home = require('./routes/home.js')
const login = require('./routes/log-in.js')
const signup = require('./routes/sign-up.js')
const staticHandler = express.static('public')

const server = express()

server.use(staticHandler)

server.use((req, res, next) => {
  const time = new Date().toLocaleTimeString('en-GB')
  console.log(`${time} ${req.method} ${req.url}`)
  next()
})

server.get('/', home.get)
server.get('/log-in', login.get)
server.get('/sign-up', signup.get)

module.exports = server
