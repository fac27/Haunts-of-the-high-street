const assert = require('node:assert');
const test = require('node:test');

const { request } = require('./crud-helpers.js');

//// READ ////

test('/ route returns homepage', async () => {
    const { status, body } = await request('/');
    assert.equal(status, 200);
    assert.match(
        body,
        /Haunts of the High Street/,
        `Response should contain 'user sighting'`
    );
});

test('/ route conditionally renders form', async () => {
    const { status, body } = await request('/');
    assert.equal(status, 200);
    assert.doesNotMatch(
        body,
        /<form>/,
        'Response should not contain form element'
    );
});

test('/ route conditionally renders buttons', async () => {
    const { status, body } = await request('/');
    assert.equal(status, 200);
    assert.doesNotMatch(
        body,
        /Logout/,
        'Response should not contain logout button'
    );
});
