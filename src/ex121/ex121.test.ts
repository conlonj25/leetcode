import { maxProfit } from './ex121';

type TestCase = { prices: number[]; result: number };
const TEST_CASES: TestCase[] = [
	{ prices: [7, 1, 5, 3, 6, 4], result: 5 },
	{ prices: [7, 6, 4, 3, 1], result: 0 },
	{ prices: [5, 10, 10, 50, 1, 3, 10], result: 45 },
	{ prices: [1, 10, 10, 50, 5, 3, 10, 90], result: 89 },
];

it.each(TEST_CASES)(
	'prices = $prices, result = $result',
	({ prices, result }) => {
		expect(maxProfit(prices)).toBe(result);
	}
);
