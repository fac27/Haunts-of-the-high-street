const bcrypt = require('bcryptjs');
const { layout } = require('../templates/layout');
const { createSession } = require('../model/session');
const { createUser, getUserByEmail } = require('../model/user');

const get = (req, res) => {
    const title = 'Sign-up to add your sightings';
    const error = req.query.error;
    const content = /*html*/ `
        <div class="column">
          <h1 class="center creepy">${title}</h1>
          
          <form method="POST" class="column center mono-font" action="/sign-up">
            <div class="">
              <label class="form-label" for="email">email</label>
              <input class = "form-input" type="email" id="email" name="email" required>
              ${error ? `<p>${error}</p>` : '<p></p>'}
            </div>
            <div class="">
              <label class="form-label" for="password">password</label>
              <input class = "form-input" type="password" id="password" name="password" required>
            </div>
            <button class="mono-font white-font purple rounded">sign-up</button>
          </form>
        </div>
      `;
    const body = layout({ title, content });
    res.send(body);
};

const post = (req, res) => {
    const { email, password } = req.body;
    const userEmail = getUserByEmail(email);
    if (!email || !password) {
        res.status(400).send('Bad input');
    } else {
        if (userEmail) {
            res.redirect('/sign-up?error=User%20already%20exists');
            return;
        }
        bcrypt.hash(password, 12).then((hash) => {
            const userObject = { email, passwordHash: hash };
            const user = createUser(userObject);
            const sessionId = createSession(user.id);

            res.cookie('sid', sessionId, {
                signed: true,
                maxAge: 7 * 24 * 60 * 60 * 1000,
                sameSite: 'lax',
                httpOnly: true,
            });
            res.redirect('/');
        });
    }
};

module.exports = { get, post };
