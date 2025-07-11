import { Injectable } from '@angular/core';
import { CardMain } from '../models/cardMain';

@Injectable({
  providedIn: 'root'
})
export class CardMainService {
  cardsMain: CardMain[] = [
    new CardMain("assets/imgs/squid.jpeg", 1, "squid game"),
    new CardMain("assets/imgs/kitty", 2, "XO Kitty"),
    new CardMain("assets/imgs/moana.webp", 3, "Moana 2"),
    new CardMain("assets/imgs/mercredi.jpeg", 4, "Mercredi"),
    new CardMain("assets/imgs/straw.jpeg", 5, "A bout"),
    new CardMain("assets/imgs/red.jpeg", 6, "Red notice"),
    new CardMain("assets/imgs/one.jpeg", 7, "One piece"),
    new CardMain("assets/imgs/beginning.jpeg", 8, "Beginning"),
    new CardMain("assets/imgs/arcane.jpeg", 9, "Arcane"),
    new CardMain("assets/imgs/berlin", 10, "Berlin"),

  ];

  getCardsMain(): CardMain[] {
    return this.cardsMain
  }
}
