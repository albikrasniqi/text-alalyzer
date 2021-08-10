import { Consonants } from "./consonants.model";
import { Vowel } from "./vowel.model";

export class TextAnalyzerResponse {
    historyId?: number;
    inputText: string = "";
    vowelsCount:number = 0;
    consonantsCount: number = 0;
    vowels : Vowel[] = [];
    consonants : Consonants[] = [];
}