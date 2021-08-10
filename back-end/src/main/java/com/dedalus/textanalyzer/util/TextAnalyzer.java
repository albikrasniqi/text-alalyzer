package com.dedalus.textanalyzer.util;

import com.dedalus.textanalyzer.entity.Consonant;
import com.dedalus.textanalyzer.entity.Vowel;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class TextAnalyzer {

    public static Set<Vowel> analyzeVowels(String vowels) {
        Set<Vowel> vowelSet = new HashSet<Vowel>();

        int countA = 0;
        int countE = 0;
        int countI = 0;
        int countO = 0;
        int countU = 0;

        char[] chars = vowels.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] == 'a' || chars[i] == 'A')
                ++countA;
            if (chars[i] == 'e' || chars[i] == 'E')
                ++countE;
            if (chars[i] == 'i' || chars[i] == 'I')
                ++countI;
            if (chars[i] == 'u' || chars[i] == 'U')
                ++countU;
            if (chars[i] == 'o' || chars[i] == 'O')
                ++countO;
        };

        if(countA > 0)
            addVowel("A", countA, vowelSet);
        if(countE > 0)
            addVowel("E", countE, vowelSet);
        if(countI > 0)
            addVowel("I", countI, vowelSet);
        if(countO > 0)
            addVowel("O", countO, vowelSet);
        if(countU > 0)
            addVowel("U", countU, vowelSet);

        return vowelSet;
    }

    public static void addVowel(String letter, int count, Set<Vowel> vowelSet) {
        Vowel vowel = new Vowel();
        vowel.setLetter(letter);
        vowel.setCount(count);
        vowelSet.add(vowel);
    }

    public static void addConsonant(String letter, int count, Set<Consonant> consonantSet) {
        Consonant consonant = new Consonant();
        consonant.setLetter(letter);
        consonant.setCount(count);
        consonantSet.add(consonant);
    }

    public static Set<Consonant> analyzeConsonants(String input) {
        Set<Consonant> consonatsSet = new HashSet<Consonant>();

        HashMap<String, Integer> consonants = new HashMap<>();
        char[] chars = input.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] != 'a'
                    && chars[i] != 'A'
                    && chars[i] != 'e'
                    && chars[i] != 'E'
                    && chars[i] != 'i'
                    && chars[i] != 'I'
                    && chars[i] != 'o'
                    && chars[i] != 'O'
                    && chars[i] != 'u'
                    && chars[i] != 'U'
            ) {
                String stringCharacter = String.valueOf(chars[i]).toUpperCase();
                if (consonants.containsKey(stringCharacter)) {
                    Integer num = consonants.get(stringCharacter);
                    num++;
                    consonants.put(stringCharacter, num);
                } else {
                    consonants.put(stringCharacter, 1);
                }
            }
        }
        consonants.entrySet().forEach(entrySet -> {
            addConsonant(entrySet.getKey(),  entrySet.getValue(), consonatsSet);
        });

        return consonatsSet;
    }

    public static int getAllVowelCount(String inputText){
        int count = 0;

        for(Vowel v: analyzeVowels(inputText)){
            count += v.getCount();
        }
        return count;
    }

   public static int getAllConsonantCount(String inputText){
        int count = 0;

        for(Consonant v: analyzeConsonants(inputText)){
            count += v.getCount();
        }
        return count;
    }

}
