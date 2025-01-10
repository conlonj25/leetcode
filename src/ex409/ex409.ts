export function longestPalindrome(s: string): number {
	const map = new Map<string, number>();
	let isSingleLetter = false;

	s.split('').forEach((char) => {
		map.set(char, (map.get(char) ?? 0) + 1);
	});

	const sum = Array.from(map.values())
		.map((x) => {
			if (x % 2 === 1) isSingleLetter = true;
			return Math.floor(x / 2);
		})
		.reduce((acc, cv) => acc + cv, 0);

	return sum * 2 + Number(isSingleLetter);
}
