import { Injectable } from '@angular/core';
import { CardMain } from '../models/cardMain';

@Injectable({
  providedIn: 'root'
})
export class CardMainService {
  cardsMain: CardMain[] = [
    new CardMain("assets/imgs/squid.jpg", 1, "squid game"),
    new CardMain("assets/imgs/squid.jpg", 2, "squid game"),
    new CardMain("assets/imgs/squid.jpg", 3, "squid game"),
    new CardMain("assets/imgs/squid.jpg", 4, "squid game"),
  ];

  getCardsMain(): CardMain[] {
    return this.cardsMain
  }
}
