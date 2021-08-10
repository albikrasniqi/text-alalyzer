import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';

import { TextAnalyzerResponse } from '../../model/text-analyzer-response.model';
import { MainServices } from '../../services/main.service';
import { Vowel } from '../../model/vowel.model';
import { Consonants } from '../../model/consonants.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  responseList: TextAnalyzerResponse = new TextAnalyzerResponse;
  vowelsList: Vowel[] = [];
  consonantsList: Consonants[] = [];
  inputTextValue: string = "";
  vowelsCountValue: number = 0;
  consonantsCountValue: number = 0;
  inputTextArea = new FormControl('');

  constructor(private http: HttpClient, private postsServie: MainServices, private formBuilder: FormBuilder) {}


  public analyzeInputText() {

    this.responseList = this.postsServie.analyzeInputText(this.inputTextArea.value);
    this.inputTextValue = this.responseList.inputText;
    this.vowelsList = this.responseList.vowels;
    this.consonantsList = this.responseList.consonants;
    this.vowelsCountValue = this.responseList.vowelsCount;
    this.consonantsCountValue = this.responseList.consonantsCount;
  }

  ngOnInit() { }

}
