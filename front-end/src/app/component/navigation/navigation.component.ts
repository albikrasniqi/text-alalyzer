import { Component, OnInit } from '@angular/core';
import { MainServices } from '../../services/main.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor( public mainServie: MainServices) { }

  ngOnInit(): void {
  }

  model = this.mainServie.getConnectionStatus();

}
