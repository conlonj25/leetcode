function isBadVersionGenerator(bad: number) {
	return (n: number): boolean => n >= bad;
}

export function solution(n: number, bad: number) {
	const isBadVersion = isBadVersionGenerator(bad);

	const f = ([min, max]: number[]) => {
		if (max - min === 0) return max;

		const mid = Math.floor((min + max) / 2);
		const next = isBadVersion(mid) ? [min, mid] : [mid + 1, max];

		return f(next);
	};

	return f([1, n]);
}
