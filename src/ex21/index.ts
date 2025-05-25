class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

const mergeTwoLists = (l1: ListNode, l2: ListNode): ListNode => {
	const dummy = new ListNode();
	let tail = dummy;

	while (l1 && l2) {
		tail.next = new ListNode();
		if (l1.val <= l2.val) {
			tail.next = l1;
			l1 = l1.next;
		} else {
			tail.next = l2;
			l2 = l2.next;
		}
		tail = tail.next;
	}

	if (l1) {
		tail.next = l1;
	}

	if (l2) {
		tail.next = l2;
	}

	return dummy.next;
};
