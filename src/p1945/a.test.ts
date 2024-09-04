import { expect, test, describe } from "bun:test";
import solve from "./a.ts";

describe("1945", () => {
  test("test one", () => {
    expect(solve("iiii", 1)).toBe(36);
  });

  test("test two", () => {
    expect(solve("leetcode", 2)).toBe(6);
  });

  test("test three", () => {
    expect(solve("zbax", 2)).toBe(8);
  });
});

