import { MyQueue } from './ex232';

describe('MyQueue', () => {
	it('should...', () => {
		const obj = new MyQueue();
		obj.push(1);
		obj.push(2);

		console.log(obj.pop());
		console.log(obj.peek());
		console.log(obj.empty());
	});
});
