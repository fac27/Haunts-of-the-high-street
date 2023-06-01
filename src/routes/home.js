const { layout } = require('../templates/layout');
const { createSighting, getAllSightings } = require('../model/sighting.js');


const get = (req, res) => {
  const title = 'Haunts of the High Street';
  const listAllSightings = getAllSightings();
  const content = /*html*/ `
    <header class="flex purple padding">
    <h1 class="creepy">${title}</h1>
    <nav class="end center"><a href="/sign-up">Sign up</a> or <a href="/log-in">log in</a></nav>
    </header>
    <div>
    <form class = "column" method="POST" action="/">
      <label for="details">Add sighting details</label>
      <input type="text" name="details">
      <label for="image_url">Add image url</label>
      <input type="url" name="image_url">
      <button type="submit">Submit</button>
    </form>
    </div>
    <div>
      ${listAllSightings.map((sighting) => `<p>${sighting.image_url} ${sighting.details}</p>`).join(' ')}
    </div>
  `
  const body = layout({ title, content })
  res.send(body)
}

const post = (req, res) => {
  const { image_url, details } = req.body;
    if (!image_url || !details) {
      res.status(400).send("Bad input");
    } else {
      ////////////////// temporary user_id ////////////////////////////
      const sighting = {user_id: 1, details, image_url}
      createSighting(sighting);
      res.redirect('/');
}
}




module.exports = { get, post }




