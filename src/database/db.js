const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const Database = require('better-sqlite3');
// Fetch environment variables in case app entry point is not index.js (e.g. when seeding in dev)
require('dotenv').config();

const db = new Database(process.env.DB_FILE);

const schemaPath = join('src', 'database', 'schema.sql');
const schema = readFileSync(schemaPath, 'utf-8');

db.exec(schema);

module.exports = db;
