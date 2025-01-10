import { f } from './ex70';

it('should...', () => {
	expect(f([1, 2, 3])).toStrictEqual([
		[1, 2, 3],
		[1, 3, 2],
		[2, 3, 1],
		[2, 1, 3],
		[3, 1, 2],
		[3, 2, 1],
	]);
});
