package com.dedalus.textanalyzer.repository;

import com.dedalus.textanalyzer.entity.History;
import com.dedalus.textanalyzer.entity.Vowel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VowelRepository extends JpaRepository<Vowel, Long> {
}
