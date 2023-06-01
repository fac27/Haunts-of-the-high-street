const { deleteSighting } = require("../model/sighting.js");

const post = (req, res) => {
    const sighting_id = req.body.sighting;
    deleteSighting(sighting_id)
    res.redirect('/')
}

module.exports = { post };