function floodFill(
	image: number[][],
	sr: number,
	sc: number,
	color: number,
): number[][] {
	const originalColor = image[sr][sc];
	const height = image.length;
	const width = image[0].length;

	const f = ([r, c]: number[]): void => {
		if (
			r < 0 ||
			c < 0 ||
			r > height - 1 ||
			c > width - 1 ||
			image[r][c] === color ||
			image[r][c] !== originalColor
		) {
			return;
		}

		image[r][c] = color;

		[
			[r + 1, c],
			[r - 1, c],
			[r, c + 1],
			[r, c - 1],
		].forEach(f);
	};

	f([sr, sc]);

	return image;
}
