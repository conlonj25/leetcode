function isAnagram(s: string, t: string): boolean {
	const freqS = [];
	const freqT = [];

	s.split("").forEach((char) =>
		freqS[char.charCodeAt(0)] ? freqS[char.charCodeAt(0)] + 1 : 1,
	);
	t.split("").forEach((char) =>
		freqT[char.charCodeAt(0)] ? freqS[char.charCodeAt(0)] + 1 : 1,
	);

	return freqS.every((value, i) => value === freqT[i]);
}
