import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("Pengujian pertama: satu atau dua nilai bertipe number: ", () => {
  assert.equal(sum(1, "7"), 0);
  assert.equal(sum("1", 7), 0);
  assert.equal(sum("1", "7"), 0);
  assert.equal(sum(null, 7), 0);
  assert.equal(sum(1, null), 0);
});

test("Pengujian kedua: dua nilai bertipe number yang negatif: ", () => {
  assert.equal(sum(-1, -7), 0);
  assert.equal(sum(-1, 7), 0);
  assert.equal(sum(1, -7), 0);
  assert.equal(sum(-1, 1), 0);
});

test("Pengujian ketiga: dua nilai bertipe number yang positif: ", () => {
  assert.equal(sum(4, 7), 11);
  assert.equal(sum(10, 100), 110);
});

test("Pengujian keempat: missing argument", () => {
  assert.strictEqual(sum(2), 0);
  assert.strictEqual(sum(undefined, 4), 0);
  assert.strictEqual(sum(), 0);
});
