export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export const arrayToList = (arr: number[]): ListNode => {
	const head = new ListNode();
	let tail = head;

	arr.forEach((val, i) => {
		tail.val = val;
		if (i < arr.length - 1) {
			tail.next = new ListNode();
			tail = tail.next;
		}
	});

	return head;
};

export const listToArray = (head: ListNode) => {
	const arr: number[] = [];
	while (head.next) {
		arr.push(head.val);
		head = head.next;
	}

	return arr;
};

export const printList = (head: ListNode) => {
	while (head.next) {
		console.log(head.val);
		head = head.next;
	}
};
