import { describe, expect, it } from "vitest";
import { twoSum } from ".";

type TestCase = { input: number[]; target: number; result: number[] };
const TEST_CASES: TestCase[] = [
	{ input: [2, 7, 11, 15], target: 9, result: [0, 1] },
	{ input: [3, 2, 4], target: 6, result: [1, 2] },
	{ input: [3, 3], target: 6, result: [0, 1] },
	{ input: [1, 3, 4, 2], target: 6, result: [2, 3] },
];

describe("ex1 two sum", () => {
	it.each(TEST_CASES)(
		"input = $input, target = $target, result = $result",
		({ input, target, result }) => {
			expect(twoSum(input, target)).toEqual(result);
		},
	);
});
