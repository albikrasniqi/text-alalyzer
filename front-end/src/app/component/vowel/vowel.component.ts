import { Component, Input, OnInit } from '@angular/core';
import { Vowel } from '../../model/vowel.model';

@Component({
  selector: 'app-vowel',
  templateUrl: './vowel.component.html',
  styleUrls: ['./vowel.component.scss']
})
export class VowelComponent implements OnInit {


  @Input() vowelsList: Vowel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
