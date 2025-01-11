# Solution

## Constraints

### The sum is the same no matter which way around

We need COMBINATIONS not PERMUTATIONS.

### The problem requires that we return indices, not the actual values

Hashmap = `{ value : index }`

### We can't use the same value twice

If we map the entire array as a first step this problem comes up

- we need to check indices and skip any that use the same two indices

There is a better solution for this

- don't map the entire array first
- start with empty map
- check first digit and see if it's complement is in the map already
- if not, then map digit
