export function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();
	let result: number[] = [];

	nums.every((num, i) => {
		const j = map.get(target - num);
		if (j !== undefined) {
			result = [j, i];
			return false;
		}
		map.set(num, i);
		return true;
	});

	return result;
}
