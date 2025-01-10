import { describe, expect, it } from "vitest";
import { twoSum } from ".";

describe("twoSum", () => {
  it("should pass test cases", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    expect(twoSum([1, 3, 4, 2], 6)).toEqual([2, 3]);
  });
});
