package com.dedalus.textanalyzer.service;

import com.dedalus.textanalyzer.entity.History;
import com.dedalus.textanalyzer.repository.HistoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class HistoryService {

    @Autowired
    private HistoryRepository historyRepository;

    public History saveHistory(History history) {
        log.debug("Inside saveHistory of HistoryService");
        return  historyRepository.save(history);
    }

    public History findHistoryById(Long historyId) {
        log.debug("Inside findHistoryById of HistoryService");
        return historyRepository.getByHistoryId(historyId);
    }

    public List<History> getAllHistory() {
        log.debug("Inside getAllHistory of HistoryService");
        return historyRepository.findAll();
    }

}
