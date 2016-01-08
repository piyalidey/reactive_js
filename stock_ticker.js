//Let's say we have a collection of all of the prices for NASDAQ stocks over time. 
//Every time the price of a stock changes on the NASDAQ ticker an entry is added to this collection. 
//Let's say that ten days ago you bought shares in Microsoft, and now you want to print all of the 
//MSFT share prices since then. Filter the collection for MSFT trades starting from ten days ago and 
//print each price record (including the time stamp) using the print() function.

function(pricesNASDAQ, printRecord) {
	var microsoftPrices,
		now = new Date(),
		tenDaysAgo = new Date( now.getFullYear(), now.getMonth(), now.getDate() - 10);

	// use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
	microsoftPrices =
		pricesNASDAQ.
			filter(function(priceRecord) {
			  return priceRecord.name === 'MSFT' && priceRecord.timeStamp > tenDaysAgo;
			});

	// Print the trades to the output console
	microsoftPrices.
		forEach(function(priceRecord) {
			printRecord(priceRecord);
		});
}
        