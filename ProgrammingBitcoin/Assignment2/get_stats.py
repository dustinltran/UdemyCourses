from blockchain import statistics

stats = statistics.get()

print("Bitcoin Trade Volume: %s" % stats.trade_volume_btc)

print("Bitcoin mined: %s\n" % stats.btc_mined)

print(stats.market_price_usd)