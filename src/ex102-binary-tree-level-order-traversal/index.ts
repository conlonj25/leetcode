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

function levelOrder(root: TreeNode | null): number[][] {
	if (!root) return [];

	const q: (TreeNode | null)[] = [];
	q.push(root);

	const result: number[][] = [];

	while (q[0] !== undefined) {
		const length = q.length;
		const level: number[] = [];
		for (let i = 0; i < length; i++) {
			const n = q.shift();
			if (n) {
				q.push(n.left);
				q.push(n.right);
				level.push(n.val);
			}
		}
		if (level.length > 0) {
			result.push(level);
		}
	}

	return result;
}
