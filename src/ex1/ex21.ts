export function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const required = target - nums[i];
		const checkMap = map.get(required);

		if (checkMap !== undefined) {
			return [checkMap, i];
		}

		map.set(nums[i], i);
	}

	return [];
}
