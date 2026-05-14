package com.TradeOS.analytics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class LiveMarketService {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    private final WebClient webClient =
            WebClient.builder()
                    .baseUrl("https://api.binance.com")
                    .build();

    @Scheduled(fixedRate = 5000)
    public void sendLivePrice() {

        String response =
                webClient.get()

                        .uri("/api/v3/ticker/price?symbol=BTCUSDT")

                        .retrieve()

                        .bodyToMono(String.class)

                        .block();

        messagingTemplate.convertAndSend(
                "/topic/live-price",
                response
        );
    }
}