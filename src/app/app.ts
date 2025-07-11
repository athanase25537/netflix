import { Component } from '@angular/core';
import { Main } from "./components/main/main";
import { Cards } from "./components/cards/cards";
import { CardReason } from "./components/card-reason/card-reason";
import { CardReasons } from "./components/card-reasons/card-reasons";

@Component({
  selector: 'app-root',
  imports: [Main, Cards, CardReason, CardReasons],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'scroll-test';
}
