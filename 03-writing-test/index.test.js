// import fungsi test dari modul node:test
import { test } from "node:test";
// import fungsi test dari modul node:assert
import assert from "node:assert";
// test fungsi sum dari index.js
import { sum } from "./index.js";

test("Hasilnya : ", () => {
  console.log(`sum(3,6) = ${sum(3, 6)}`);
  assert.strictEqual(sum(3, 6), 9, "test sum(3,6) gagal");
  console.log(`sum(4,-2) = ${sum(4, -2)}`);
  assert.strictEqual(sum(4, -2), 2, "test sum(4,-2) gagal");
  console.log(`sum(0,0) = ${sum(0, 0)}`);
  assert.strictEqual(sum(0, 0), 0, "test sum(0,0) gagal");
  console.log(`sum(-3,6) = ${sum(-3, 6)}`);
  assert.strictEqual(sum(-3, 6), 3, "test sum(-3,6) gagal");
});
