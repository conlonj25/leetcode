class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function hasCycle(head: ListNode | null): boolean {
	let fast = head;
	let slow = head;

	while (fast?.next?.next) {
		fast = fast.next.next;
		slow = slow.next;

		if (fast === slow) return true;
	}

	return false;
}
