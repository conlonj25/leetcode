import { arrayToList, printList } from '../utils/ListNode';
import { middleNode } from './ex876';

describe('ex876', () => {
	it('should...', () => {
		const l = arrayToList([1, 2, 3, 4, 5]);
		const result = middleNode(l);

		printList(result);
	});
});
