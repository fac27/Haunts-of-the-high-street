const express = require("express");
const home = require("./routes/home.js");


const server = express();

server.use((req, res, next) => {
  const time = new Date().toLocaleTimeString("en-GB");
  console.log(`${time} ${req.method} ${req.url}`);
  next();
});

server.get("/", home.get);
module.exports = server;
