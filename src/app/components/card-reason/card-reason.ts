import { Component, input } from '@angular/core';
import { CardReasonModel } from '../../models/cardReasonModel';

@Component({
  selector: 'app-card-reason',
  imports: [],
  templateUrl: './card-reason.html',
  styleUrl: './card-reason.scss'
})
export class CardReason {
  card = input<CardReasonModel>(new CardReasonModel(
    "Regardez Netflix sur votre TV",
    "Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus.",
    "fa-solid fa-desktop"
  ))
}
