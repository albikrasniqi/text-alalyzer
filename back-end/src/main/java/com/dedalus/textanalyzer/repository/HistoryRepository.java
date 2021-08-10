package com.dedalus.textanalyzer.repository;

import com.dedalus.textanalyzer.entity.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryRepository extends JpaRepository<History, Long> {
    History getByHistoryId(Long historyId);
}
