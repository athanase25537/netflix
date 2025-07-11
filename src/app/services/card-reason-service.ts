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
      "Téléchargez vos séries pour les regarder hors connexion",
      "Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.",
      "fa-solid fa-download"
    ),

    new CardReasonModel(
      "Où que vous soyez",
      "Regardez des films et séries en accès illimité sur votre TV, smartphone, tablette et ordinateur.",
      "fa-solid fa-magnifying-glass"
    ),

    new CardReasonModel(
      "Créez des profils pour les enfants",
      "Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement.",
      "fa-solid fa-face-smile-beam"
    ),
  ]

  getCards(): CardReasonModel[] {
    return this.cards;
  }
}
