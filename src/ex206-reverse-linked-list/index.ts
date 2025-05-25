// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function reverseList(head: ListNode | null): ListNode | null {
	if (!head) return null;

	let x: ListNode | null = null;
	let y: ListNode | null = null;

	do {
		y = head;
		head = head.next;
		y.next = x;
		x = y;
	} while (head.next);

	return head;
}
