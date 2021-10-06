import { Component, OnInit } from '@angular/core';
import {Card} from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  Cards: Card[] = [
    new Card(1,'card1','card 1 description'),
    new Card(2,'card2','card2 description'),
    new Card(3,'card3','card 3 description'),
    new Card(4,'card4','card 4 description'),
  ];
  showD(index:any){
    this.Cards[index].showD = !this.Cards[index].showD;
  }
  cardDone(isDone: any, index: any){
    if (isDone) {
      this.Cards.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
