function search(nums: number[], target: number): number {
	const f = (left: number, right: number) => {
		if (right - left < 2) {
			if (nums[left] === target) return left;
			if (nums[right] === target) return right;
			return -1;
		}

		const pivot = left + Math.floor((right - left) / 2);

		if (nums[pivot] <= target) {
			left = pivot;
		} else {
			right = pivot;
		}

		return f(left, right);
	};

	return f(0, nums.length - 1);
}
