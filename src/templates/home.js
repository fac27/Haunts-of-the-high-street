const { Layout } = require('./layout')

const get = (req, res) => {
  const title = 'Haunts of the High Street'
  const content = /*html*/ `
    <header>${
      session
        ? /*html*/ `<form method="POST" action="/log-out"><button class="Button">Log out</button></form>`
        : /*html*/ `<nav><a href="/sign-up">Sign up</a> or <a href="/log-in">log in</a></nav>`
    }</header>
    <div class=''>
      <h1>${title}</h1>
    </div>
  `
  const body = Layout({ title, content })
  res.send(body)
}

module.exports = { get }
