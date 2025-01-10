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

export function isBalanced(root: TreeNode | null): boolean {
	function f(root: TreeNode | null) {
		if (!root) return [true, 0];

		const [lb, lh] = root.left ? f(root.left) : [true, 0];
		const [rb, rh] = root.right ? f(root.right) : [true, 0];

		const balanced = lb && rb && Math.abs(lh - rh) <= 1;
		const height = Math.max(lh, rh) + 1;

		return [balanced, height];
	}

	const [balanced, height] = f(root);

	return balanced;
}
