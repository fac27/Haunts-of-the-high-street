const express = require('express')
const home = require('./src/routes/home.js')
const login = require('./src/routes/log-in.js')
const signup = require('./src/routes/sign-up.js')
const staticHandler = express.static('public')

const body = express.urlencoded({ extended: true })
const server = express()

server.use(staticHandler)

server.use((req, res, next) => {
  const time = new Date().toLocaleTimeString('en-GB')
  console.log(`${time} ${req.method} ${req.url}`)
  next()
})

server.get('/', home.get);
server.get('/sign-up', signup.get);
server.post('/sign-up', body, signup.post);
server.get('/log-in', login.get);
server.post('/log-in', body, login.post);
server.post("/", body, home.post);

module.exports = server