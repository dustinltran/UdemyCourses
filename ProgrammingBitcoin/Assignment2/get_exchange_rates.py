from blockchain import exchangerates

ticker = exchangerates.get_ticker()

print("Bitcoin Prices")
for x in ticker:
	print(x, ticker[x].p15min)

btc = exchangerates.to_btc('USD', 100)
print("\n100 dollars in Bitcoin: %s" % btc)