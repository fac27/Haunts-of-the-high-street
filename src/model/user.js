const db = require("../database/db.js");

const insert_user = db.prepare(/*sql*/ `
  INSERT INTO users (email, password_hash)
  VALUES ($email, $passwordHash)
  RETURNING id
`);

function createUser(email, passwordHash) {
  return insert_user.get({ email, passwordHash });
}

const select_user_by_email = db.prepare(/*sql*/ `
  SELECT id, email, password_hash, created_at FROM users WHERE email = ?
`);

function getUserByEmail(email) {
  return select_user_by_email.get(email);
}

module.exports = { createUser, getUserByEmail };