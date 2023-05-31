const { Layout } = require('../templates/layout')

const get = (req, res) => {
  const title = 'Log in to add your sightings'
  const content = /*html*/ `
      <div class="">
        <h1>${title}</h1>
        <form method="POST" class="">
          <div class="" >
            <label for="email">email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="">
            <label for="password">password</label>
            <input type="password" id="password" name="password" required>
          </div>
          <button class="Button">Log in</button>
        </form>
      </div>
    `
  const body = Layout({ title, content })
  res.send(body)
}


module.exports = { get }
