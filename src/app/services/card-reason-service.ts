import { Injectable } from '@angular/core';
import { CardReasonModel } from '../models/cardReasonModel';

@Injectable({
  providedIn: 'root'
})
export class CardReasonService {
  cards: CardReasonModel[] = [
    new CardReasonModel(
      "Regardez Netflix sur votre TV",
      "Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus.",
      "fa-solid fa-desktop"
    ),

    new CardReasonModel(
      "Regardez Netflix sur votre TV",
      "Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus.",
      "fa-solid fa-desktop"
    ),

    new CardReasonModel(
      "Regardez Netflix sur votre TV",
      "Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus.",
      "fa-solid fa-desktop"
    ),

    new CardReasonModel(
      "Regardez Netflix sur votre TV",
      "Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus.",
      "fa-solid fa-desktop"
    ),
  ]

  getCards(): CardReasonModel[] {
    return this.cards;
  }
}
