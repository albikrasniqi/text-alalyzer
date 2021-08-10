import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './component/history/history.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { 
    path: 'home', 
    component:HomeComponent 
  },
  { 
    path: 'history', 
    component:HistoryComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
