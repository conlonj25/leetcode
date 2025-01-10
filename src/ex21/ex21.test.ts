import {
	ListNode,
	arrayToListNode,
	listNodeToArray,
	mergeTwoLists,
} from './ex21';

describe('arrayToListNode', () => {
	it('should return correctly for an empty array', () => {
		const expectedResult = {
			val: 0,
			next: null,
		};

		const actualResult = arrayToListNode([]);

		expect(JSON.stringify(actualResult)).toStrictEqual(
			JSON.stringify(expectedResult)
		);
	});

	it('should return correctly for an expected array', () => {
		const input = [1, 2, 3, 4];

		const expectedResult = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: {
						val: 4,
						next: null,
					},
				},
			},
		};

		const actualResult = arrayToListNode(input);

		expect(JSON.stringify(actualResult)).toStrictEqual(
			JSON.stringify(expectedResult)
		);
	});
});

describe('listNodeToArray', () => {
	it('should return correctly for a single listnode', () => {
		const input = new ListNode(7);
		const result = listNodeToArray(input);

		expect(result).toStrictEqual([7]);
	});

	it('should return correctly for a series of listnodes', () => {
		const input = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: {
						val: 4,
						next: null,
					},
				},
			},
		};

		expect(listNodeToArray(input)).toStrictEqual([1, 2, 3, 4]);
	});
});

describe('listNodeToArray', () => {
	it('should correctly merge two lists of the same length', () => {
		const l1 = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: null,
				},
			},
		};

		const l2 = {
			val: 2,
			next: {
				val: 3,
				next: {
					val: 4,
					next: null,
				},
			},
		};

		const expectedResult = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 2,
					next: {
						val: 3,
						next: {
							val: 3,
							next: {
								val: 4,
								next: null,
							},
						},
					},
				},
			},
		};

		const actualResult = mergeTwoLists(l1, l2);

		expect(JSON.stringify(actualResult)).toStrictEqual(
			JSON.stringify(expectedResult)
		);
	});

	it('should correctly merge two lists of different lengths', () => {
		const l1 = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: null,
				},
			},
		};

		const l2 = {
			val: 5,
			next: {
				val: 7,
				next: {
					val: 9,
					next: {
						val: 11,
						next: {
							val: 13,
							next: {
								val: 15,
								next: null,
							},
						},
					},
				},
			},
		};

		const expectedResult = {
			val: 1,
			next: {
				val: 2,
				next: {
					val: 3,
					next: {
						val: 5,
						next: {
							val: 7,
							next: {
								val: 9,
								next: {
									val: 11,
									next: {
										val: 13,
										next: {
											val: 15,
											next: null,
										},
									},
								},
							},
						},
					},
				},
			},
		};

		const actualResult = mergeTwoLists(l1, l2);

		expect(JSON.stringify(actualResult)).toStrictEqual(
			JSON.stringify(expectedResult)
		);
	});
});
