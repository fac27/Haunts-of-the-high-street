const { Layout } = require('../templates/layout')

const get = (req, res) => {
    const title = 'Sign-up to add your sightings'
    const content = /*html*/ `
        <div class="">
          <h1>${title}</h1>
          <form method="POST" class="" action="/">
            <div class="">
              <label for="email">email</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="">
              <label for="password">password</label>
              <input type="password" id="password" name="password" required>
            </div>
            <button class="Button">sign-up</button>
          </form>
        </div>
      `
    const body = Layout({ title, content })
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
