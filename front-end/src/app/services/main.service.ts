import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Consonants } from "../model/consonants.model";
import { TextAnalyzerResponse } from "../model/text-analyzer-response.model";
import { TextAnalyzerRequest } from "../model/text-analyzer.model";
import { Vowel } from "../model/vowel.model";
import { ApiService } from "./api.service";
import { TextAnalyzerService } from "./text-analyzer.service";

@Injectable({ providedIn: 'root' })

export class MainServices {

  checkConnectionStatus: boolean = false;

  vowelsList: Vowel[] = [];
  consonantsList: Consonants[] = [];
  inputTextValue: string = "";
  vowelsCountValue: number = 0;
  consonantsCountValue: number = 0;

  responsData: TextAnalyzerResponse[] = [];

 // postObject: Post = new Post();

  constructor(private http: HttpClient, private textAnalyzerService: TextAnalyzerService, private apiService: ApiService) {
  }

  setConnectionStatusFalse() {
    this.checkConnectionStatus = false;
  }

  setConnectionStatusTrue() {
    this.checkConnectionStatus = true;
  }

  getConnectionStatus() {
    return this.checkConnectionStatus;
  }

  analyzeInputText(inputText: string) {
    if (this.getConnectionStatus() == true) {
      return this.analyzeInputTexOnline(inputText);
    } else {
      return this.analyzeInputTextOffline(inputText);
    }
  }

  analyzeInputTexOnline(inputText: string) {
    return this.apiService.analyzeInputTextOnline(inputText);
  }

  analyzeInputTextOffline(inputText: string) {
    return this.textAnalyzerService.analyzeInputText(inputText);
  }

}