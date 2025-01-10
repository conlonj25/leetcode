export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export const arrayToListNode = (input: number[]): ListNode => {
	const head = new ListNode(input[0]);
	let tail = head;

	for (let i = 1; i < input.length; i++) {
		tail.next = new ListNode(input[i]);
		tail = tail.next;
	}

	return head;
};

export const listNodeToArray = (input: ListNode): number[] => {
	const result: number[] = [];
	let tail: ListNode | null = input;

	while (tail) {
		result.push(tail.val);
		tail = tail.next;
	}

	return result;
};

export const mergeTwoLists = (list1: ListNode, list2: ListNode): ListNode => {
	let l1: ListNode | null = list1;
	let l2: ListNode | null = list2;

	const head = new ListNode(0);
	let tail = head;

	while (l1 && l2) {
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
	} else {
		tail.next = l2;
	}

	return head.next as ListNode;
};
