function addBinary(a: string, b: string): string {
	const n = Math.max(a.length, b.length);
	const sa = a.split("").map(Number).reverse();
	const sb = b.split("").map(Number).reverse();
	const result: number[] = [];

	const fa = (op1: number, op2: number, cin: number) => {
		const [sum1, cout1] = [op1 ^ op2, op1 && op2];
		const [sum2, cout2] = [sum1 ^ cin, sum1 && cin];

		return [sum2, cout1 | cout2];
	};

	let carry = 0;

	for (let i = 0; i < n; i++) {
		const [s, c] = fa(sa[i] ?? 0, sb[i], carry);
		result.push(s);
		carry = c;
	}

	if (carry) {
		result.push(carry);
	}

	return result.reverse().join("");
}
