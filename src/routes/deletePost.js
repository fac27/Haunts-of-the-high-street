const { deleteSighting } = require("../model/sighting.js");

const post = (req, res) => {
    const session = req.session;
    const sighting_id = req.body.sighting;
    if(session){
     deleteSighting(sighting_id)   
    } else {
        console.log('Oops! Login or Sign-Up first!');
    }
    
    res.redirect('/')
}

module.exports = { post };