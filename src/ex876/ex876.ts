import { ListNode } from '../utils/ListNode';

export function middleNode(head: ListNode | null): ListNode | null {
	let p1 = head;
	let p2 = head;
	let n = 1;

	while (p1.next) {
		n++;
		p1 = p1.next;
	}

	const target = Math.floor(n / 2) + 1;

	for (let i = 1; i < target; i++) {
		p2 = p2.next;
	}

	return p2;
}
