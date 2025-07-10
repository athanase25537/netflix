import { Component } from '@angular/core';
import { EmailInput } from "../email-input/email-input";

@Component({
  selector: 'app-main',
  imports: [EmailInput],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
