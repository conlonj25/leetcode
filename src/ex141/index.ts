// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function hasCycle(head: ListNode | null): boolean {
	let slow: ListNode | null | undefined = head;
	let fast: ListNode | null | undefined = head;

	while (fast?.next?.next) {
		slow = slow?.next;
		fast = fast?.next?.next;

		if (slow === fast) return true;
	}

	return false;
}
