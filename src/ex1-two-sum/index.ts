export function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();
	nums.forEach((num, i) => map.set(num, i));

	let res: number[] = [];

	nums.every((num, i) => {
		const j = map.get(target - num);
		if (j && j !== i) {
			res = [i, j];
			return false;
		}

		return true;
	});

	return res;
}
