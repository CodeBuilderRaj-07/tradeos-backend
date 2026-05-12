package com.TradeOS.repository;

import com.TradeOS.entity.Trade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TradeRepository extends JpaRepository<Trade, Long> {

    List<Trade> findByUserEmail(String userEmail);

    List<Trade> findByUserEmailAndStatus(
            String userEmail,
            String status
    );

    List<Trade> findByUserEmailAndSymbol(
            String userEmail,
            String symbol
    );

    Trade findByIdAndUserEmail(
            Long id,
            String userEmail
    );

    List<Trade> findTop5ByUserEmailOrderByIdDesc(
            String userEmail
    );

    Page<Trade> findByUserEmailOrderByIdDesc(
            String userEmail,
            Pageable pageable
    );
}