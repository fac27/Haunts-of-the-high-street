const db = require('../database/db.js');

const insert_user = db.prepare(/*sql*/ `
  INSERT INTO users (email, password_hash)
  VALUES ($email, $passwordHash)
  RETURNING id
`);

function createUser(user) {
    return insert_user.get(user);
}

const select_user_by_email = db.prepare(/*sql*/ `
  SELECT id, email, password_hash, created_at FROM users WHERE email = ?
`);

function getUserByEmail(email) {
    return select_user_by_email.get(email);
}

const select_user_by_id = db.prepare(/*sql*/ `
  SELECT id, email, password_hash, created_at FROM users WHERE id = ?
`);

function getUserById(id) {
    return select_user_by_id.get(id);
}

module.exports = { createUser, getUserByEmail, getUserById };
