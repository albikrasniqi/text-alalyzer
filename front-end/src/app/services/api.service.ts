import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TextAnalyzerResponse } from "src/app/model/text-analyzer-response.model";
import {map} from 'rxjs/operators'
import { TextAnalyzerRequest } from "../model/text-analyzer.model";

@Injectable ({providedIn: 'root'})
export class ApiService {

  responsObject: TextAnalyzerResponse = new TextAnalyzerResponse();
  responsData: TextAnalyzerResponse[] = [];

    constructor (private http: HttpClient){}

    analyzeInputTextOnline(inputText: string) {
      const textAnalzyer: TextAnalyzerRequest = { inputText: inputText };
      this.http
        //.post <{list:Post[]}>(
        .post<TextAnalyzerResponse>(
          //  .post <any>(
          'http://localhost:8080/api/analyzer',
          textAnalzyer
        )
        .subscribe(responseData => {
          this.responsObject = responseData;
        });
  
      this.responsData.push(this.responsObject);
      return this.responsObject;
  
    }

    getAllHistoryData() {
      return  this.http
      .get<{ [key: string]: TextAnalyzerResponse }>(
        'http://localhost:8080/api/analyzer'
      )
      .pipe(
        map(responseData => {
          const responsDataList: TextAnalyzerResponse[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              responsDataList.push({ ...responseData[key]});
            }
          }
          return  responsDataList;
        })
      )
    }

    findHistoryById(historyId: number) {
      return  this.http
      .get<any>(
        'http://localhost:8080/api/analyzer/'+ historyId
      )
    }

}