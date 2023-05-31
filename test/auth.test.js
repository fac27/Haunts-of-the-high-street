const test = require("node:test");
const assert = require("node:assert");
const { createUser } = require("../src/model/user");
const { createSession, getSession } = require("../src/model/session");
const { reset } = require("./auth-helpers");



test("createSession can insert a new session", async () => {
  reset();

  const user = createUser("x@test.com", "jnewcinecu283");
  const sid = createSession(user.id);
  assert.ok(
    sid,
    `Expected createSession to return the session ID, but got: ${sid}`
  );
  assert.ok(
    sid.length > 10,
    `Expected session ID to be long, but it was only ${sid.length} characters`
  );

  const session = getSession(sid);
  assert.equal(
    session.user_id,
    user.id,
    `Expected session to store the user ID, but session.user_id was: ${session.user_id}`
  );
});

// Sign Up creates a new user

// Log in without credentials fails

// Log out deletes session and clears cookie

// Post without log in fails

// Cannot post to another account

// Cannot delete others' posts