const { removeSession } = require('../model/session');

const post = (req, res) => {
    const session = req.session;

    if (session) {
        const userId = session.userId;
        removeSession(userId);
        res.clearCookie('sid');
    }

    res.redirect('/');
};

module.exports = { post };
