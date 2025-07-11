import { Component, input } from '@angular/core';
import { FaqModel } from '../../models/faqModel';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  faq = input<FaqModel>(new FaqModel(
      "1", 
      "Netflix, qu'est ce que c'est ?", 
      [
        "Netflix est un service de streaming qui propose une vaste sélection de séries, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.",
        "Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries chaque semaine, il y en a pour tous les goûts !"

      ]
  ));

  open = false;

  onClick(): void {
    this.open = !this.open
  }
}
