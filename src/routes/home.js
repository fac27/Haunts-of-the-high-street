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
    <form class = "column" method="POST">
      <label>Add image url</label>
      <input type="url" name="imageUrl">
      <label>Add sighting details</label>
      <input type="text" name="details">
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




