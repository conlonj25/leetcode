export function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number[]>();
	nums.forEach((num, i) => map.set(num, [i, target - num]));

	let res: number[] = [];

	nums.every((num, i) => {
		const [_, required] = map.get(num) ?? [];
		const [j] = map.get(required) ?? [];

		if (j) {
			res = [i, j];
			return false;
		}

		return true;
	});

	return res;
}
