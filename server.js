const cookieParser = require("cookie-parser");
const express = require("express");
const server = express();

const home = require("./src/routes/home.js");
const login = require("./src/routes/log-in");
const logout = require('./src/routes/log-out.js');
const signup = require("./src/routes/sign-up.js");
const {getSession, removeSession} = require("./src/model/session.js");

const staticHandler = express.static("public");
require("dotenv").config();
server.use(staticHandler);

const body = express.urlencoded({ extended: true });
const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use((req, res, next) => {
  const time = new Date().toLocaleTimeString("en-GB");
  console.log(`${time} ${req.method} ${req.url}`);
  next();
});

const sessions = (req, res, next) => {
  const sid = req.signedCookies.sid;
  const session = getSession(sid);
  if (session) {
    const expiry = new Date(session.expires_at);
    const today = new Date();
    if (expiry < today) {
      removeSession(sid);
      res.clearCookie("sid");
    } else {
      req.session = session;
    }
  }
  next();
};

server.use(cookies);
server.use(sessions);

server.get("/", home.get);
server.get("/sign-up", signup.get);
server.post("/sign-up", body, signup.post);
server.get("/log-in", login.get);
server.post("/log-in", body, login.post);
server.post("/", body, home.post);
server.post('/log-out', body,  logout.post);

module.exports = server;
