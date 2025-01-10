import { isValid } from './ex20';

type TestCase = { s: string; result: boolean };
const TEST_CASES: TestCase[] = [
	{ s: '()', result: true },
	{ s: '()[]{}', result: true },
	{ s: '(]', result: false },
	{ s: '((()))', result: true },
	{ s: '((()))', result: true },
	{ s: '[', result: false },
];

it.each(TEST_CASES)('s = $s result = $result', ({ s, result }) => {
	expect(isValid(s)).toBe(result);
});
