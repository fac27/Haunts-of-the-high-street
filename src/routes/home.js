const { layout } = require('../templates/layout');
const { createSighting, getAllSightings } = require('../model/sighting.js');


const get = (req, res) => {
  const session = req.session;

  const title = 'Haunts of the High Street';
  const listAllSightings = getAllSightings();
  const content = /*html*/ `
    <header class="flex purple padding">
    <h1 class="creepy">${title}</h1>
    ${session ? 
      /*html*/`<form class='end center mono-font' method='POST' action='/log-out'><button class='mono-font white-font purple'>Log-out</button></form>` :
      /*html*/`<nav class="end center mono-font white-font"><a class ="mono-font white-font" href="/sign-up">Sign up</a> or <a class ="mono-font white-font" href="/log-in">log in</a></nav>`}
    </header>
    <div class="column center mono-font">
    <form class = "column center" method="POST">
      <label class="form-label">Add image url</label>
      <input class = "form-input" type="url" name="image_url">
      <label class="form-label" >Add sighting details</label>
      <input class = "form-input" type="text" name="details">
      <button class ="mono-font rounded" type="submit">Submit</button>
    </form>
    </div>
    <div class="column center mono-font">
      ${listAllSightings
        .map((sighting) => /*html*/`
        <div>
        <form method="POST" action="/delete">
          <input type="hidden" name="sighting_id" value="${sighting.id}">
          <button type="submit">X</button>
        </form>
        <img src="${sighting.image_url}">
        <p> ${sighting.details}</p>
        </div>
        `)
        .join(' ')}
    </div>
  `
  const body = layout({ title, content })
  res.send(body)
}

const post = (req, res) => {
  console.log(req.body);
  const { image_url, details } = req.body;
    if (!image_url || !details) {
      res.status(400).send("Bad input");
    } else {
      const session = req.session;

      if (session) {
        const userId = session.user_id;
        const sighting = {user_id: userId, details, image_url}
        createSighting(sighting);
        res.redirect('/');
      }
}
}

module.exports = { get, post }
