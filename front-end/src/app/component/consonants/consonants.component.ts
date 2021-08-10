import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Consonants } from '../../model/consonants.model';

@Component({
  selector: 'app-consonants',
  templateUrl: './consonants.component.html',
  styleUrls: ['./consonants.component.scss']
})
export class ConsonantsComponent implements OnInit {

  @Input() consonantsList: Consonants[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  }
