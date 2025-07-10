import { Component } from '@angular/core';
import { Main } from "./components/main/main";
import { Cards } from "./components/cards/cards";

@Component({
  selector: 'app-root',
  imports: [Main, Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'scroll-test';
}
