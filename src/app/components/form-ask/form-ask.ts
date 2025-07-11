import { Component } from '@angular/core';
import { EmailInput } from "../email-input/email-input";

@Component({
  selector: 'app-form-ask',
  imports: [EmailInput],
  templateUrl: './form-ask.html',
  styleUrl: './form-ask.scss'
})
export class FormAsk {

}
