export class MyQueue {
	stack: number[] = [];

	push(x: number): void {
		this.stack.push(x);
	}

	pop(): number | undefined {
		const result = this.stack[0];
		this.stack = this.stack.slice(1);
		return result;
	}

	peek(): number | undefined {
		return this.stack[0];
	}

	empty(): boolean {
		return this.stack.length === 0;
	}
}
