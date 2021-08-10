import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITEMS_PER_PAGE, ITEMS_PER_PAGE_LIST } from '../../config/pagination.constants';
import { TextAnalyzerResponse } from '../../model/text-analyzer-response.model';
import { Vowel } from '../../model/vowel.model';
import { Consonants } from '../../model/consonants.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  loadedPosts: TextAnalyzerResponse[] = [];
  loadedVowels: Vowel[] = [];
  totalItems = 0;
  itemsPerPageList = ITEMS_PER_PAGE_LIST;

  page = 1;
  pageSize = ITEMS_PER_PAGE;
  collectionSize = 0;

  vowelsList: Vowel[] = [];
  consonantsList: Consonants[] = [];
  inputTextValue: string = "";
  vowelsCountValue: number = 0;
  consonantsCountValue: number = 0;

  constructor(private http: HttpClient, private apiService: ApiService) {
  }

  ngOnInit() {
   this.fetchPosts()
  }

  fetchPosts() {
    this.apiService.getAllHistoryData().subscribe(response => {
    this.collectionSize = response.length;
    this.loadedPosts = response.map((response, i) => ({id: i + 1, ...response}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);; 
  });
  }

  viewHistoryDetails(historyId: any){
    this.apiService.findHistoryById(historyId).subscribe(responsData => {
    this.vowelsCountValue = responsData.vowelsCount;
    this.consonantsCountValue = responsData.consonantsCount;
    this.vowelsList = responsData.vowels;
    this.consonantsList = responsData.consonants; 
    });
  }

}
