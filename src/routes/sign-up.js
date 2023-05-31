const { Layout } = require('../templates/layout')

const get = (req, res) => {
    const title = 'Sign-up to add your sightings'
    const content = /*html*/ `
        <div class="column">
          <h1 class="creepy">${title}</h1>
          <form method="POST" class="">
            <div class="" >
              <label class="form-label" for="email">email</label>
              <input class = "form-input" type="email" id="email" name="email" required>
            </div>
            <div class="">
              <label class="form-label" for="password">password</label>
              <input class = "form-input" type="password" id="password" name="password" required>
            </div>
            <button class="Button">sign-up</button>
          </form>
        </div>
      `
    const body = Layout({ title, content })
    res.send(body)
  }

  module.exports = { get }
