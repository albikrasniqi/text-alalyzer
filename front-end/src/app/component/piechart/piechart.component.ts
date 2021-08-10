import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent {

  @Input()  vowelsCountValue : any = 0;
  @Input() consonantsCountValue: any = 0;

  constructor(){
  }

   // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Vowels', 'Consonants'];
  public pieChartData: SingleDataSet = [this.vowelsCountValue, this.consonantsCountValue];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
