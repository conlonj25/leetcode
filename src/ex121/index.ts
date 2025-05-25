function maxProfit(prices: number[]): number {
	let buyPrice = prices[0];
	let profit = 0;

	prices.forEach((price) => {
		if (price < buyPrice) {
			buyPrice = price;
		}

		profit = Math.max(profit, price - buyPrice);
	});

	return profit;
}
