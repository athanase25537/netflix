import { Component, input } from '@angular/core';
import { CardMain } from '../../models/cardMain';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  card = input<CardMain>(new CardMain("assets/imgs/squid.jpg", 1, "squid game"));
}
