const bcrypt = require("bcryptjs");
const { getUserByEmail } = require('../model/user');
const { layout } = require('../templates/layout');
const {createSession} = require('../model/session')

const get = (req, res) => {
  const title = "Log in to add your sightings";
  const error = req.query.error;
  const content = /*html*/ `
      <div class="column">
        <h1 class="center creepy">${title}</h1>
        <form method="POST" class="column center mono-font" action="/log-in">
          <div class="" >
            <label class="form-label" for="email">email</label>
            <input class = "form-input" type="email" id="email" name="email" required>
          </div>
          <div class="">
            <label class="form-label" for="password">password</label>
            <input class = "form-input" type="password" id="password" name="password" required>
          </div>
          ${error ? `<p>${error}</p>` : `<p></p>`}
          <button class="mono-font white-font purple rounded">Log in</button>
        </form>
      </div>
    `;
  const body = layout({ title, content });
  res.send(body);
};

const post = (req, res) => {
  const { email, password } = req.body;
  const user = getUserByEmail(email);
  if (!email || !password|| !user) {
    res.redirect('/log-in?error=Login%20fail');
    return;
  }
  bcrypt.compare(password,user.password_hash)
  .then((result) => {
    if(!result) { 
      return res.status(400).send("<h1>Login failed</h1>");
    } else {
    const sessionId = createSession(user.id);
    res.cookie("sid", sessionId, {
      signed: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      sameSite: "lax",
      httpOnly: true,
    });
    res.redirect(`/`);
  }
  });
  
};

module.exports = { get, post };
