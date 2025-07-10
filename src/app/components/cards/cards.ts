import { Component, OnInit } from '@angular/core';
import { CardMain } from '../../models/cardMain';
import { CardMainService } from '../../services/card-main-service';
import { Card } from "../card/card";

@Component({
  selector: 'app-cards',
  imports: [Card],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class Cards implements OnInit {
  
  cards!: CardMain[];

  constructor(private cardMainService: CardMainService) { }

  ngOnInit(): void {
    this.cards = this.cardMainService.getCardsMain();
  }
}
