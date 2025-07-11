import { Injectable } from '@angular/core';
import { FaqModel } from '../models/faqModel';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faqs: FaqModel[] = [
    new FaqModel(
      "1", 
      "Netflix, qu'est ce que c'est ?", 
      [
        "Netflix est un service de streaming qui propose une vaste sélection de séries, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.",
        "Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries chaque semaine, il y en a pour tous les goûts !"

      ]
    ),

    new FaqModel(
      "2", 
      "Combien coûte, Netflix ?", 
      [
        "Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les offres vont de 2,99 $US à 9,99 $US par mois. Pas de contrat ni de frais supplémentaires."
      ]
    ),

    new FaqModel(
      "3", 
      "Où puis-je regarder Netflix ?", 
      [
        "Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.",
        "Vous pouvez aussi télécharger vos séries préférées avec l'application iOS ou Android. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous."
      ]
    ),

    new FaqModel(
      "4", 
      "Comment puis-je annuler mon offre ?", 
      [
        "Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment."
      ]
    ),

    new FaqModel(
      "5", 
      "Que puis-je regarder sur Netflix ?", 
      [
        "Netflix propose un vaste catalogue comprenant notamment des longs-métrages, des documentaires, des séries, des animes et des programmes originaux Netflix primés. Regardez Netflix à volonté, quand vous le voulez."
      ]
    ),

    new FaqModel(
      "6", 
      "Est-ce que Netflix est adapté aux enfants  ?", 
      [
        "Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.",
        "Les profils Jeunesse comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques."
      ]
    )
  ]

  getFaqs(): FaqModel[] {
    return this.faqs;
  }
}
