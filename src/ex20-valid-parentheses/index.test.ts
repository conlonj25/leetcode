import { describe, expect, it } from "vitest";
import { isValid } from ".";

type TestCase = { str: string; result: boolean };
const TEST_CASES: TestCase[] = [
	{ str: "()", result: true },
	{ str: "()[]{}", result: true },
	{ str: "(]", result: false },
	{ str: "((()))", result: true },
	{ str: "[", result: false },
];

describe("ex20 valid parentheses", () => {
	it.each(TEST_CASES)("str = $str, result = $result", ({ str, result }) => {
		expect(isValid(str)).toBe(result);
	});
});
