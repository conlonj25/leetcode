import { isPalindrome } from './ex125';

it('should...', () => {
	expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
	expect(isPalindrome('race a car')).toBe(false);
	expect(isPalindrome(' ')).toBe(true);
	expect(isPalindrome('0P')).toBe(false);
});
