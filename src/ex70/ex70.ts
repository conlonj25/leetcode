export function f(nums: number[]): number[][] {
	const result: number[][] = [];

	if (nums.length === 1) return [nums.slice()];

	for (let i = 0; i < nums.length; i++) {
		const n = nums.splice(0, 1);
		const perms = f(nums);

		perms.forEach((perm) => {
			result.push([...n, ...perm]);
		});

		nums.push(...n);
	}

	return result;
}
