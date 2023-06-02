const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const db = require('./db');

const seedPath = join('src', 'database', 'seed.sql');
const seed = readFileSync(seedPath, 'utf-8');
db.exec(seed);

// eslint-disable-next-line no-console
console.log('DB seeded with example data');
