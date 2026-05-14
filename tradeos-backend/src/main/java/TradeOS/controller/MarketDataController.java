package com.TradeOS.controller;

import com.TradeOS.analytics.MarketDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/market")
public class MarketDataController {

    @Autowired
    private MarketDataService marketDataService;

    @GetMapping("/{symbol}")
    public Map<String, Object> getMarketPrice(
            @PathVariable String symbol
    ) {

        return marketDataService
                .getPrice(symbol);
    }
}