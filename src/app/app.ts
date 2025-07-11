import { Component } from '@angular/core';
import { Main } from "./components/main/main";
import { Cards } from "./components/cards/cards";
import { CardReasons } from "./components/card-reasons/card-reasons";
import { Faq } from "./components/faq/faq";

@Component({
  selector: 'app-root',
  imports: [Main, Cards, CardReasons, Faq],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'scroll-test';
}
