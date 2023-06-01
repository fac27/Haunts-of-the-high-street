const bcrypt = require('bcryptjs');
const { layout } = require('../templates/layout');
const { createSession } = require('../model/session');
const { createUser } = require('../model/user');


const get = (req, res) => {
    const title = 'Sign-up to add your sightings'
    const content = /*html*/ `
        <div class="column">
          <h1 class="creepy">${title}</h1>
          <form method="POST" class="column center mono-font" action="/sign-up">
            <div class="">
              <label class="form-label" for="email">email</label>
              <input class = "form-input" type="email" id="email" name="email" required>
            </div>
            <div class="">
              <label class="form-label" for="password">password</label>
              <input class = "form-input" type="password" id="password" name="password" required>
            </div>
            <button class="mono-font white-font purple">sign-up</button>
          </form>
        </div>
      `
    const body = layout({ title, content })
    const body = layout({ title, content })
    res.send(body)
  }

  const post = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Bad input");
    } else {
      bcrypt.hash(password, 12).then ((hash) => {
        const user = createUser(email, hash);
        const sessionId = createSession(user.id);

        res.cookie("sid", sessionId, {
          signed: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
          sameSite: 'lax',
          httpOnly: true,
        });
        res.redirect('/');
      });
      
  }
}

module.exports = { get, post }
