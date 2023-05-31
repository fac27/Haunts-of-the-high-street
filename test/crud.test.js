const assert = require('node:assert');
const test = require('node:test');


const { request } = require('./helpers.js');

                            //// READ ////



test('/ route returns homepage', async () => {
    const { status, body } = await request('/');
    assert.equal(status, 200);
    assert.match(body, /user sighting/, `Response should contain 'user sighting'`);
});

test('/ route conditionally renders buttons', async () => {
  const {status, body } = await request('/');
  assert.equal(status, 200);
  assert.doesNotMatch(body, /Logout/, 'Response should not contain logout button');
});

test('/ route conditionally renders form', async () => {
  const {status, body } = await request('/');
  assert.equal(status, 200);
  assert.doesNotMatch(body, /<form>/, 'Response should not contain form button');
})

                            //// CREATE ////

// Posting a sighting adds it to the home page



                            //// UPDATE ////

// Editing a post changes its contents on the homepage

                            //// DESTROY ////

// Deleting a post removes it from the homepage