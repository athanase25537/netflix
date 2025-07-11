import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardMain } from '../../models/cardMain';
import { CardMainService } from '../../services/card-main-service';
import { Card } from "../card/card";

@Component({
  selector: 'app-cards',
  imports: [CommonModule, Card],
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class Cards implements OnInit {
  
  cards!: CardMain[];

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  showLeft = false;
  showRight = true;

  constructor(private cardMainService: CardMainService) { }

  ngOnInit(): void {
    this.cards = this.cardMainService.getCardsMain();
    setTimeout(() => this.updateScrollButtons(), 100); // Initial check
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  onScroll() {
    this.updateScrollButtons();
  }

  updateScrollButtons() {
    const el = this.scrollContainer.nativeElement;
    this.showLeft = el.scrollLeft > 0;
    this.showRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 5;
  }
}
