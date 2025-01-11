export function isValid(s: string): boolean {
	const chars: string[] = s.split("");
	const stack: string[] = [];
	const map = new Map<string, string>([
		["{", "}"],
		["(", ")"],
		["[", "]"],
	]);

	chars.forEach((char) => {
		const prevChar = stack.pop();

		if (prevChar === undefined) {
			stack.push(char);
			return;
		}

		if (char === map.get(prevChar)) {
			return;
		}

		stack.push(prevChar);
		stack.push(char);
	});

	return stack.length === 0;
}
