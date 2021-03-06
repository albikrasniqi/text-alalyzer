import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainServices } from './services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  constructor(private http: HttpClient, private mainServie: MainServices, private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(["/home"]);
  }

}
