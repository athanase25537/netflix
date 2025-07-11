import { Component, OnInit } from '@angular/core';
import { CardReason } from "../card-reason/card-reason";
import { CardReasonModel } from '../../models/cardReasonModel';
import { CardReasonService } from '../../services/card-reason-service';

@Component({
  selector: 'app-card-reasons',
  imports: [CardReason],
  templateUrl: './card-reasons.html',
  styleUrl: './card-reasons.scss'
})
export class CardReasons implements OnInit {
  cards!: CardReasonModel[];

  constructor(private cardReasonService: CardReasonService) { }

  ngOnInit(): void {
    this.cards = this.cardReasonService.getCards();
  }
}
