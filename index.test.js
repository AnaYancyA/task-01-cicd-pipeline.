
const test = require("node:test");
const assert = require("node:assert/strict");

test("the application message is correct", () => {
    const message = "Hello from my DevOps CI/CD Pipeline!";
    assert.equal(message, "Hello from my DevOps CI/CD Pipeline!");
});
