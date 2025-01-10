export function addBinary(a: string, b: string): string {
	const adder = (a: boolean, b: boolean, cIn: boolean) => {
		const sum = (a !== b) != cIn;
		const cOut = (a && b) || (cIn && a !== b);
		return [sum, cOut];
	};

	const length = Math.max(a.length, b.length);
	a = a.padStart(length, '0');
	b = b.padStart(length, '0');

	let sum = false;
	let carry = false;
	let result = '';

	for (let i = length - 1; i >= 0; i--) {
		[sum, carry] = adder(a[i] === '1', b[i] === '1', carry);
		const sumString = sum ? '1' : '0';
		result = sumString.concat(result);
	}

	if (carry) {
		result = '1'.concat(result);
	}

	return result;
}
