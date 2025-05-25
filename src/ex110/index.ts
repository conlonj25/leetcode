// Definition for a binary tree node.
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function isBalanced(root: TreeNode | null): boolean {
	const f = (root: TreeNode | null) => {
		if (!root) return [0, true];

		const height = Math.max(f(root.left), f(root.right)) + 1;
		const balanced = Math.abs(f(root.left) - f(root.right)) <= 1;

		return [height, balanced];
	};

	return f(root)[1];
}
