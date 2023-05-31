const { Layout } = require('../templates/layout')

const get = (req, res) => {
  const title = 'Haunts of the High Street'
  const content = /*html*/ `
    <header>
    <nav><a href="/sign-up">Sign up</a> or <a href="/log-in">log in</a></nav>
    </header>
    <div class=''>
      <h1>${title}</h1>
    </div>
    <div>
    <p>user sighting</p>
    </div>
  `
  const body = Layout({ title, content })
  res.send(body)
}


module.exports = { get }




