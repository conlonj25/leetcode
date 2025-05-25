// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function middleNode(head: ListNode | null): ListNode | null {
	let [fast, f] = [head, 0];
	let [slow, s] = [head, 0];
	let midPoint = 0;

	if (!head) return null;

	while (fast) {
		midPoint = Math.ceil(f / 2);
		while (s < midPoint) {
			slow = slow.next;
			s++;
		}
		fast = fast.next;
		f++;
	}

	return slow;
}
