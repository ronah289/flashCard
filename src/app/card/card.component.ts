import { Component, OnInit } from '@angular/core';
import {Card} from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  Cards: Card[] = [
    { id: 1, title: 'card1',description:'card 1 description' },
    { id: 2, title: 'card2',description:'card 2 description' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
