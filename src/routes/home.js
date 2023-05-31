const { Layout } = require('../templates/layout')

const get = (req, res) => {
  const title = 'Haunts of the High Street'
  const content = /*html*/ `
    <header></header>
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


// <header>${
//       session
//         ? /*html*/ `<form method="POST" action="/log-out"><button class="Button">Log out</button></form>`
//         : /*html*/ `<nav><a href="/sign-up">Sign up</a> or <a href="/log-in">log in</a></nav>`
//     }</header>

{/* <ul class="Center Stack">
${confessions
  .map(
    (entry) => `
    <li>
      <h2>${entry.created_at}</h2>
      <p>${entry.content}</p>
      <img>${entry.image} alt="Confession Image"</img>
    </li>
    `
  )
  .join("")}
</ul> */}