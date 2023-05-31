const test = require('node:test');
const assert = require('node:assert');

const { request } = require('./helpers.js');

                            //// READ ////

const home = ``;

test(`/ route returns ${home}`, async () => {
    const { status, body } = await request('/', {
        method: 'GET',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      });
    assert.equal(status, 200);
    assert.match(body, home, `Response should contain ${home}`);
});

                            //// CREATE ////

// Posting a sighting adds it to the home page



                            //// UPDATE ////

// Editing a post changes its contents on the homepage

                            //// DESTROY ////

// Deleting a post removes it from the homepage