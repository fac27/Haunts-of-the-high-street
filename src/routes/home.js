const { layout } = require('../templates/layout')
const { createSighting, getAllSightings } = require('../model/sighting.js')

const get = (req, res) => {
  const title = 'Haunts of the High Street'
  const listAllSightings = getAllSightings()
  const content = /*html*/ `
    <header class="flex purple padding">
    <h1 class="creepy">${title}</h1>
    <nav class="end center mono-font white-font"><a class="white-font" href="/sign-up">Sign up</a> or <a class="white-font" href="/log-in">log in</a></nav>
    </header>
    <div class="column center mono-font">
    <form class = "column center" method="POST">
      <label class="form-label">Add image url</label>
      <input class = "form-input" type="url" name="imageUrl">
      <label class="form-label" >Add sighting details</label>
      <input class = "form-input" type="text" name="details">
      <button class ="mono-font" type="submit">Submit</button>
    </form>
    </div>
    <div class="column center mono-font">
      ${listAllSightings
        .map((sighting) => `<p class="align-left">${sighting.image_url} <br> ${sighting.details}</p>`)
        .join(' ')}
    </div>
  `
  const body = layout({ title, content })
  res.send(body)
}

const post = (req, res) => {
  const { imageUrl, details } = req.body;
    if (!imageUrl || !details) {
      res.status(400).send("Bad input");
    } else {
      ////////////////// temporary user_id ////////////////////////////
      const userId = 1;
      console.log(userId, imageUrl, details);
      console.log(process.env.DB_FILE)
      createSighting(userId, imageUrl, details);
      res.redirect('/');
}
}

module.exports = { get, post }
