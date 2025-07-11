import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-email-input',
  imports: [CommonModule],
  templateUrl: './email-input.html',
  styleUrl: './email-input.scss'
})
export class EmailInput {
  focus = false;
  onForm = input<boolean>(false);
  
  onfocus() {
    this.focus = true;
    console.log(this.focus)
  }

  onblur() {
    this.focus = false;
  }
}
