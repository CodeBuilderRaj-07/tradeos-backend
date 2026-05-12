package com.TradeOS.controller;

import com.TradeOS.analytics.AnalyticsService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class AnalyticsController {

    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/api/analytics")
    public Map<String, Object> analytics(
            HttpServletRequest request
    ) {

        String email =
                (String) request.getAttribute("email");

        return analyticsService.getAnalytics(email);
    }
}