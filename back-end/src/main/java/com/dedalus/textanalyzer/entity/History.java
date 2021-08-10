package com.dedalus.textanalyzer.entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long historyId;
    @NotNull
    private String inputText;
    private int vowelsCount;
    private int ConsonantsCount;

    @OneToMany(targetEntity = Vowel.class,
            cascade = CascadeType.ALL,
             fetch = FetchType.LAZY
    )
    private Set<Vowel> vowels = new HashSet<>();

    @OneToMany(targetEntity = Consonant.class,
            cascade = CascadeType.ALL,
            fetch = FetchType.LAZY
    )
    private Set<Consonant> consonants= new HashSet<>();
}
