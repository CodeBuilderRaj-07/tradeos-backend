package com.TradeOS.analytics;

import com.TradeOS.entity.Trade;
import com.TradeOS.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AnalyticsService {

    @Autowired
    private TradeRepository tradeRepository;

    public Map<String, Object> getAnalytics(String email) {

        List<Trade> trades =
                tradeRepository.findByUserEmail(email);

        int totalTrades = trades.size();

        int winningTrades = 0;

        int openTrades = 0;

        int closedTrades = 0;

        double totalPnl = 0;

        for (Trade trade : trades) {

            totalPnl += trade.getPnl();

            if (trade.getPnl() > 0) {
                winningTrades++;
            }

            if (trade.getStatus().equals("OPEN")) {
                openTrades++;
            }

            if (trade.getStatus().equals("CLOSED")) {
                closedTrades++;
            }
        }

        double winRate = 0;

        if (totalTrades > 0) {

            winRate =
                    ((double) winningTrades / totalTrades)
                            * 100;
        }

        Map<String, Object> analytics =
                new HashMap<>();

        analytics.put("totalTrades", totalTrades);

        analytics.put("winningTrades", winningTrades);

        analytics.put("winRate", winRate);

        analytics.put("totalPnl", totalPnl);

        analytics.put("openTrades", openTrades);

        analytics.put("closedTrades", closedTrades);

        return analytics;
    }
}