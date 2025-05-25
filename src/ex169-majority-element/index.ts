function majorityElement(nums: number[]): number {
	let majority = 0;
	let majorityElement = 0;
	const half = nums.length / 2;

	const freq: number[] = [];

	nums.every((num) => {
		freq[num] = freq[num] ? freq[num] + 1 : 1;

		if (freq[num] > majority) {
			majority = freq[num];
			majorityElement = num;
		}

		if (majority > half) return false;

		return true;
	});

	return majorityElement;
}

function boyerMooreMajorityElement(nums: number[]): number {
	let leader = nums[0];
	let tally = 0;

	nums.forEach((num) => {
		if (tally === 0) leader = num;

		if (num === leader) {
			tally++;
		} else {
			tally--;
		}
	});

	return leader;
}
