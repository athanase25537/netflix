import { Component } from '@angular/core';
import { Main } from "./components/main/main";
import { Cards } from "./components/cards/cards";
import { CardReasons } from "./components/card-reasons/card-reasons";
import { Faqs } from './components/faqs/faqs';
import { Footer } from "./components/footer/footer";
import { FormAsk } from "./components/form-ask/form-ask";

@Component({
  selector: 'app-root',
  imports: [Main, Cards, CardReasons, Faqs, Footer, FormAsk],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'scroll-test';
}
