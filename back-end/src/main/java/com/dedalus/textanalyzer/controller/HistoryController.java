package com.dedalus.textanalyzer.controller;

import com.dedalus.textanalyzer.entity.History;

import com.dedalus.textanalyzer.service.HistoryService;
import com.dedalus.textanalyzer.util.TextAnalyzer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class HistoryController {

    @Autowired
    private HistoryService historyService;

    @PostMapping("/analyzer")
    public History saveTextAnalyzer(@RequestBody History history) {
        log.info("Inside saveHistory of HistoryController");
        createHistory(history);
        return historyService.saveHistory(history);
    }

    @GetMapping("/analyzer/{id}")
    public History findHistoryById(@PathVariable("id") Long id) {
        log.info("Inside findHistoryById of HistoryController");
        return historyService.findHistoryById(id);
    }

    @GetMapping("/analyzer")
    public List<History> getAllHistory() {
        log.info("Inside findHistoryById of HistoryController");
        return historyService.getAllHistory();
    }

    private void createHistory(History history) {
        history.setVowelsCount(TextAnalyzer.getAllVowelCount(history.getInputText()));
        history.setConsonantsCount(TextAnalyzer.getAllConsonantCount(history.getInputText()));
        history.setVowels(TextAnalyzer.analyzeVowels(history.getInputText()));
        history.setConsonants(TextAnalyzer.analyzeConsonants(history.getInputText()));
    }
}
