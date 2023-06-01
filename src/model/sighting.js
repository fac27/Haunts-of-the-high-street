const db = require("../database/db.js");

const select_all_sightings = db.prepare(/*sql*/ `
    SELECT
        sightings.id,
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
  VALUES ($user_id, $details, $image_url)
  RETURNING id, created_at
`);

function createSighting(sighting) {
  return insert_sighting.get(sighting);
}

const remove_sighting = db.prepare(/*sql*/`
  DELETE FROM sightings
  WHERE id = ?
`)
function deleteSighting(id) {
  remove_sighting.run(id);
}

module.exports = { getAllSightings, createSighting, deleteSighting };