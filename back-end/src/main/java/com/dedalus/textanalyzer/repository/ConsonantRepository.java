package com.dedalus.textanalyzer.repository;

import com.dedalus.textanalyzer.entity.Consonant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsonantRepository extends JpaRepository<Consonant, Long> {

}
