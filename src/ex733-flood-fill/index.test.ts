import { floodFill } from '.';

it('case 1', () => {
	const img = [
		[1, 1, 1],
		[1, 1, 0],
		[1, 0, 1],
	];
	const filledImg = [
		[2, 2, 2],
		[2, 2, 0],
		[2, 0, 1],
	];

	expect(floodFill(img, 1, 1, 2)).toStrictEqual(filledImg);
});

it('case 2', () => {
	const img = [
		[0, 0, 0],
		[0, 0, 0],
	];
	const filledImg = [
		[0, 0, 0],
		[0, 0, 0],
	];
	expect(floodFill(img, 0, 0, 0)).toStrictEqual(filledImg);
});

it('case 3', () => {
	const img = [
		[0, 0, 0],
		[0, 0, 0],
	];
	const filledImg = [
		[2, 2, 2],
		[2, 2, 2],
	];

	expect(floodFill(img, 1, 0, 2)).toStrictEqual(filledImg);
});
