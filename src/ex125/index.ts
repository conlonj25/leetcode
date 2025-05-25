function isPalindrome(s: string): boolean {
	const alphanumericChars = s
		.toLocaleLowerCase()
		.split("")
		.filter((char) => {
			const code = char.charCodeAt(0);
			return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
		});

	return alphanumericChars.join("") === alphanumericChars.reverse().join("");
}
