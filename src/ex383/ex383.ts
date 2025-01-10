// one uses hashmap and letters, the other uses arrays and charCodes
// time and space complexity is roughly the same

export function canConstruct(ransomNote: string, magazine: string): boolean {
	const map = new Map<string, number>();

	magazine.split('').forEach((letter) => {
		const count = map.get(letter) ?? 0;
		map.set(letter, count + 1);
	});

	return ransomNote.split('').every((letter) => {
		const count = map.get(letter) ?? 0;

		if (count > 0) {
			map.set(letter, count - 1);
			return true;
		}

		return false;
	});
}

// export function canConstruct(ransomNote: string, magazine: string): boolean {

// 	const alphabet = new Array('z'.charCodeAt(0)).fill(0);

// 	magazine.split('').forEach(letter => {
// 		alphabet[letter.charCodeAt(0)]++;
// 	});

// 	return ransomNote.split('').every(letter => {
// 		if(alphabet[letter.charCodeAt(0)] > 0) {
// 			alphabet[letter.charCodeAt(0)]--;
// 			return true;
// 		}
// 		return false;
// 	});
// };
