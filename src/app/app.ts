import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from "./components/main/main";
import { EmailInput } from "./components/email-input/email-input";
import { Card } from "./components/card/card";
import { Cards } from "./components/cards/cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main, EmailInput, Card, Cards],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'scroll-test';
}
