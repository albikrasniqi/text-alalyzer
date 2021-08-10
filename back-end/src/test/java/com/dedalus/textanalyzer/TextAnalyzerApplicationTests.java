package com.dedalus.textanalyzer;

import com.dedalus.textanalyzer.entity.Consonant;
import com.dedalus.textanalyzer.entity.Vowel;
import com.dedalus.textanalyzer.util.TextAnalyzer;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashSet;
import java.util.Set;

@SpringBootTest
class TextAnalyzerApplicationTests {

	TextAnalyzer sut;
	String inputText = "AABB";

	@Test
	void givenInputText_whenAnalyzeWowel_ThenAsserNotNullAndEqualAndContains() {
		//given
		Set<Vowel> vowelsList = new HashSet<Vowel>();
		vowelsList.add(buildVowels("A", 2));

		//when
		Set<Vowel> responseVowelsList = sut.analyzeVowels(inputText);

		//then
		Assertions.assertThat(responseVowelsList).isNotNull();
		Assertions.assertThat(responseVowelsList.size()).isEqualTo(vowelsList.size());
		Assertions.assertThat(responseVowelsList).containsAll(vowelsList);
	}

	@Test
	void givenInputText_whenAnalyzeConsonants_ThenAsserNotNullAndEqualAndContains() {
		//given
		Set<Consonant> consonantsSet = new HashSet<Consonant>();
		consonantsSet.add(buildConsonant("B",2));

		//when
		Set<Consonant> list = sut.analyzeConsonants(inputText);

		//then
		Assertions.assertThat(list).isNotNull();
		Assertions.assertThat(list.size()).isEqualTo(1);
		Assertions.assertThat(list).containsAll(consonantsSet);
	}

	@Test
	void givenInputText_whenGetAllVowelCount_ThenAsserNotNullAndEqualAndContains() {
		//given
		Set<Vowel> vowelsList = new HashSet<Vowel>();
		vowelsList.add(buildVowels("A", 2));

		//when
		int count = sut.getAllVowelCount(inputText);

		//then
		Assertions.assertThat(count).isNotNull();
		Assertions.assertThat(count).isEqualTo(2);
	}

	@Test
	void givenInputText_whenGetAllConsonantCount_ThenAsserNotNullAndEqualAndContains() {
		//given
		Set<Consonant> consonantsSet = new HashSet<Consonant>();
		consonantsSet.add(buildConsonant("B", 2));

		//when
		int count = sut.getAllConsonantCount(inputText);

		//then
		Assertions.assertThat(count).isNotNull();
		Assertions.assertThat(count).isEqualTo(2);
	}

	private Consonant buildConsonant(String letter, int count) {
		return Consonant.builder()
				.letter(letter)
				.count(count)
				.build();
	}

	private Vowel buildVowels(String letter, int count) {
		Vowel vowel =
				Vowel.builder()
						.letter(letter)
						.count(count)
						.build();
		return vowel;
	}
}
