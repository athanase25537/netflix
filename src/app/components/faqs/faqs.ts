import { Component, OnInit } from '@angular/core';
import { FaqModel } from '../../models/faqModel';
import { FaqService } from '../../services/faq-service';
import { Faq } from "../faq/faq";

@Component({
  selector: 'app-faqs',
  imports: [Faq],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss'
})
export class Faqs implements OnInit {
  faqs!: FaqModel[];

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.faqs = this.faqService.getFaqs();
  }
}
