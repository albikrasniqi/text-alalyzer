package com.dedalus.textanalyzer.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Vowel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long vowelId;
    private String letter;
    private int count;


}
