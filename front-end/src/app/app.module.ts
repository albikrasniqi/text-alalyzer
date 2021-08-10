import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './component/home/home.component';
import { HistoryComponent } from './component/history/history.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './component/navigation/navigation.component';
import { VowelComponent } from './component/vowel/vowel.component';
import { ConsonantsComponent } from './component/consonants/consonants.component';
import { PiechartComponent } from './component/piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [AppComponent, HomeComponent, HistoryComponent, NavigationComponent, VowelComponent, ConsonantsComponent, PiechartComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule , HttpClientModule, NgbModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
