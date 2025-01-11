# Solution

- Loop through each character
- Pop previous character off stack
  - If there's nothing there push current character onto stack. Move on.
  - If the characters are reciprocals, then they both be discarded. Move on.
  - Otherwise, push both back onto stack. Move on.
- Once you've done the whole pass, every valid pair should have been discarded. Anything left in the stack means the string is not valid.
