const { deleteSighting } = require('../model/sighting.js');

const post = (req, res) => {
    const session = req.session;
    if (!session) {
        res.status(402).send(`<h1>Oops! Login or Sign-Up first!</h1>`);
        return;
    }
    const sighting_id = req.body.sighting_id;
    const isUser = req.body.user_id == session.user_id;
    // eslint-disable-next-line no-negated-condition
    if (!isUser) {
        res.status(401).send(`<h1>That's not your post!</h1>`);
        return;
    } else {
        deleteSighting(sighting_id);
    }
    res.redirect('/');
};

module.exports = { post };
