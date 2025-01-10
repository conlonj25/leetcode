export function maxProfit(prices: number[]): number {
	let buyPrice = prices[0];
	let profit = 0;

	prices.forEach((price) => {
		if (buyPrice > price) {
			buyPrice = price;
		}

		profit = Math.max(profit, price - buyPrice);
	});

	return profit;
}
