export function floodFill(
	image: number[][],
	sr: number,
	sc: number,
	color: number
): number[][] {
	const validNeighbors = [
		[sr + 1, sc],
		[sr - 1, sc],
		[sr, sc + 1],
		[sr, sc - 1],
	].filter(
		([r, c]) =>
			image[r] !== undefined &&
			image[r][c] !== undefined &&
			image[r][c] === image[sr][sc] &&
			image[r][c] !== color
	);

	image[sr][sc] = color;

	validNeighbors.forEach(([r, c]) => floodFill(image, r, c, color));

	return image;
}
