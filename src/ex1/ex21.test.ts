import { twoSum } from './ex21';

type TestCase = { nums: number[]; target: number; result: number[] };
const TEST_CASES: TestCase[] = [
	{ nums: [2, 7, 11], target: 9, result: [0, 1] },
	{ nums: [3, 2, 4], target: 6, result: [1, 2] },
	{ nums: [3, 3], target: 6, result: [0, 1] },
];

it.each(TEST_CASES)(
	'nums = $nums, target = $target, result = $result',
	({ nums, target, result }) => {
		expect(twoSum(nums, target)).toStrictEqual(result);
	}
);
