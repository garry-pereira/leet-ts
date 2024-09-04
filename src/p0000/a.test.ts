import { expect, test, describe } from "bun:test";
import solve from "./a.ts";

describe("0000", () => {
  test("2 + 2", () => {
    expect(solve(2, 2)).toBe(4);
  });

  test("4 + 4", () => {
    expect(solve(4, 4)).toBe(8);
  });
});

