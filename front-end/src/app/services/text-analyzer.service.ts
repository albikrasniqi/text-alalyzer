import { Injectable } from "@angular/core";
import { Consonants } from "../model/consonants.model";
import { TextAnalyzerResponse } from "../model/text-analyzer-response.model";
import { Vowel } from "../model/vowel.model";

/**
 * The program for calculating how many times letter in given sentence appears.
 */

@Injectable({ providedIn: 'root' })
export class TextAnalyzerService {

  public analyzeInputText(inputText: string) {

    let responsList: TextAnalyzerResponse[] = [];
    let vowelsList: Vowel[] = [];
    let consonantsList: Consonants[] = [];

    vowelsList = this.analyzeVowels(inputText);
    consonantsList = this.analyzeConsonants(inputText)

    let analzyerModel = new TextAnalyzerResponse();
    analzyerModel.inputText = inputText;
    analzyerModel.vowels = vowelsList;
    analzyerModel.consonants = consonantsList;
    analzyerModel.vowelsCount = this.countVowels(inputText);
    analzyerModel.consonantsCount = this.countConsonats(inputText);

    responsList.push(analzyerModel);

    return analzyerModel;
  }

  private analyzeVowels(inputText: String): Vowel[] {

    let vowelList: Vowel[] = [];
    let countA: number = 0;
    let countE: number = 0;
    let countI: number = 0;
    let countO: number = 0;
    let countU: number = 0;

    for (let letter of inputText.toUpperCase()) {
      if (letter == 'A') {
        countA++
      }
      if (letter == 'E') {
        countE++
      }
      if (letter == 'I') {
        countI++
      }
      if (letter == 'O') {
        countO++
      }
      if (letter == 'U') {
        countU++
      }
    }

    if (countA > 0) {
      this.addVowel("A", countA, vowelList);
    }
    if (countE > 0) {
      this.addVowel("E", countE, vowelList);
    }
    if (countI > 0) {
      this.addVowel("I", countI, vowelList);
    }
    if (countO > 0) {
      this.addVowel("O", countO, vowelList);
    }
    if (countU > 0) {
      this.addVowel("U", countU, vowelList);
    }

    return vowelList;
  }


  private analyzeConsonants(inputText: String): Consonants[] {
    let tempList: Consonants[] = [];
    let consonantsList: Consonants[] = [];
    const Vowels = ["A", "E", "I", "O", "U"];

    for (let letter of inputText.toUpperCase()) {
      if (!Vowels.includes(letter)) {
        let consonats = new Consonants;
        consonats.letter = letter;
        consonats.count = 1;
        tempList.push(consonats);
      }
    }

    for (let temp of tempList) {
      if (consonantsList.length > 0) {
        for (let x of consonantsList) {
          if (x.letter == temp.letter) {
            x.count++;
            break;
          }
        }

        if (!consonantsList.find(letter => letter.letter == temp.letter)) {
          consonantsList.push(temp);
        }
      }
      else {
        consonantsList.push(temp);
      }
    }
    return consonantsList;
  }
  
  private addVowel(letter: string, counter: number, vowelsList: Vowel[]) {
    let vowel = new Vowel();
    vowel.letter = letter;
    vowel.count = counter;
    vowelsList.push(vowel);
  }

  private addConsonats(letter: string, consonantsList: Consonants[]) {
    let consonant = new Consonants();
    consonant.letter = letter;
    consonant.count = 1;
    consonantsList.push(consonant);
  }

  private countVowels(inputText: string) {

    const Vowels = ["A", "E", "I", "O", "U"];
    let counter = 0;

    for (let letter of inputText.toUpperCase()) {
      if (Vowels.includes(letter)) {
        counter++
      }
    }
 
    return counter;
  }

  private countConsonats(inputText: string) {
    const Vowels = ["A", "E", "I", "O", "U"];
    let counter = 0;

    for (let letter of inputText.toUpperCase()) {
      if (!Vowels.includes(letter)) {
        counter++
      }
    }
    return counter;
  }
}