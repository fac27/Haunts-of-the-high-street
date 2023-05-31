const db = require("../database/db.js");

const select_all_sightings = db.prepare(/*sql*/ `
    SELECT
        email,
        details,
        image_url,
        sightings.created_at AS created_at
    FROM sightings
    JOIN users
    ON sightings.user_id = users.id
    ORDER BY created_at DESC
`);

function getAllSightings() {
  return select_all_sightings.all();
}

const insert_sighting = db.prepare(/*sql*/ `
  INSERT INTO sightings (user_id, details, image_url)
  VALUES (?, ?, ?)
  RETURNING id, created_at
`);

function createSighting(userId, details, imageUrl) {
  return insert_sighting.get( userId, details, imageUrl );
}

module.exports = { getAllSightings, createSighting };