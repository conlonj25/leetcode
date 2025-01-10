import { canConstruct } from './ex383';

type TestCase = { note: string; magazine: string; result: boolean };
const TEST_CASES: TestCase[] = [
	{ note: 'a', magazine: 'b', result: false },
	{ note: 'aa', magazine: 'ab', result: false },
	{ note: 'aa', magazine: 'aab', result: true },
	{
		note: 'bg',
		magazine: 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj',
		result: true,
	},
];

it.each(TEST_CASES)(
	'note = $note, magazine = $magazine',
	({ note, magazine, result }) => {
		expect(canConstruct(note, magazine)).toBe(result);
	}
);
