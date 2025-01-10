export function search(nums: number[], target: number): number {
	function f(nums: number[], indexes: number[]) {
		if (nums.length === 1) {
			if (nums[0] === target) return indexes[0];
			return -1;
		}

		const m = Math.floor((nums.length - 1) / 2);
		const isValueLessThanTarget = nums[m] < target;

		const numsRight = nums.splice(m + 1);
		const numsLeft = nums;
		const indexesRight = indexes.splice(m + 1);
		const indexesLeft = indexes;

		const nextNums = isValueLessThanTarget ? numsRight : numsLeft;
		const nextIndexes = isValueLessThanTarget ? indexesRight : indexesLeft;

		return f(nextNums, nextIndexes);
	}

	return f(nums, [...Array(nums.length).keys()]);
}
