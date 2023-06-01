const { layout } = require('../templates/layout')

const get = (req, res) => {
    const title = 'Sign-up to add your sightings'
    const content = /*html*/ `
        <div class="column">
          <h1 class="creepy">${title}</h1>
          <form method="POST" class="column center mono-font" action="/">
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
    res.send(body)
  }

  const post = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Bad input");
    } else {
      res.redirect('/')
  }
}

  module.exports = { get, post }
