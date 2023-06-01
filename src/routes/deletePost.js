const { deleteSighting } = require("../model/sighting.js");

const post = (req, res) => {
    const session = req.session;
    if(!session) {
        console.log('Oops! Login or Sign-Up first!');
        //res.status(402).send(`<h1>Oops! Login or Sign-Up first!</h1>`)
        return
    }
    const sighting_id = req.body.sighting_id;
    const isUser = sighting_id == session.user_id;
    console.log(isUser);
    if(!isUser){
        console.log("That's not your post!")
        //res.status(401).send(`<h1>That's not your post!</h1>`)
        return
    } else {
       deleteSighting(sighting_id)    
    }
    res.redirect('/')
}

module.exports = { post };