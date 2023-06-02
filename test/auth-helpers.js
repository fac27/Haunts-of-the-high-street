const server = require(`../src/server.js`);
const db = require(`../src/database/db.js`);
const { createUser, getUserByEmail } = require(`../src/model/user.js`);
const { createSession } = require(`../src/model/session.js`);

function reset() {
    db.exec(/*sql*/ `
    DELETE FROM sightings;
    DELETE FROM sessions;
    DELETE FROM users;
    DELETE FROM sqlite_sequence WHERE name IN ('sightings', 'sessions', 'users');
  `);
}

async function request(pathname, options = {}) {
    const app = server.listen(0);
    const { port } = app.address();
    const url = new URL(pathname, `http://localhost:${port}`);
    options.headers = { ...options.headers, connection: 'close' };
    const response = await fetch(url, options);
    app.close();
    const body = await response.text();
    const headers = Object.fromEntries(response.headers);
    return { status: response.status, body, headers };
}

function get_sid(headers) {
    const [sid_cookie] = headers['set-cookie'].split('.');
    const encoded_sid = sid_cookie.replace('sid=s%3A', '');
    return decodeURIComponent(encoded_sid);
}

module.exports = {
    reset,
    createUser,
    getUserByEmail,
    createSession,
    request,
    get_sid,
};
