export function isPalindrome(s: string): boolean {
	const chars = s
		.split('')
		.map((char) => char.toLowerCase())
		.filter((char) => {
			const code = char.charCodeAt(0);
			return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
		});

	let p1 = 0;
	let p2 = chars.length - 1;

	while (p1 <= p2) {
		if (chars[p1] !== chars[p2]) {
			return false;
		}
		p1++;
		p2--;
	}

	return true;
}
