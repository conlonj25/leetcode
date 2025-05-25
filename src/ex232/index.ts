class MyQueue {
	stack: number[];
	constructor() {
		this.stack = [];
	}

	push(x: number): void {
		this.stack.push(x);
	}

	pop(): number {
		const res = this.stack[0];
		this.stack = this.stack.slice(1);
		return res;
	}

	peek(): number {
		return this.stack[0];
	}

	empty(): boolean {
		return this.stack.length < 1;
	}
}
