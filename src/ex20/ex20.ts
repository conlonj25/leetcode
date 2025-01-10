export function isValid(s: string): boolean {
	const map = new Map<string, string>([
		['(', ')'],
		['{', '}'],
		['[', ']'],
	]);

	const stack: string[] = [];

	const isEachCharValid = s.split('').every((char) => {
		if (map.get(char)) {
			stack.push(char);
			return true;
		}

		const prevChar = stack.pop();
		if (prevChar && char == map.get(prevChar)) {
			return true;
		}

		return false;
	});

	return isEachCharValid && stack.length === 0;
}
