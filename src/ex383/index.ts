function canConstruct(ransomNote: string, magazine: string): boolean {
	const noteFreq: number[] = new Array("z".charCodeAt(0)).fill(0);
	const magFreq: number[] = new Array("z".charCodeAt(0)).fill(0);

	ransomNote.split("").forEach((char) => {
		noteFreq[char.charCodeAt(0)] = noteFreq[char.charCodeAt(0)] + 1;
	});

	magazine.split("").forEach((char) => {
		magFreq[char.charCodeAt(0)] = magFreq[char.charCodeAt(0)] + 1;
	});

	return noteFreq.every((freq, charCode) => magFreq[charCode] >= freq);
}
