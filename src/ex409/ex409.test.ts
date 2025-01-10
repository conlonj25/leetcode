import { longestPalindrome } from './ex409';

describe('longestPalindrome', () => {
	it('should return 7 for abccccdd', () => {
		expect(longestPalindrome('abccccdd')).toBe(7);
	});

	it('should return 1 for a', () => {
		expect(longestPalindrome('a')).toBe(1);
	});
});
