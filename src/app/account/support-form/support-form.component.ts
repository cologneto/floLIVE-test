import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.css']
})
export class SupportFormComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  textArea = new FormControl('', [Validators.required]);

  getErrorMessageMail(): string {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageText(): string {
    if (this.textArea.hasError('required')) {
      return 'You must enter a text';
    }

    return this.textArea.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(): void {
    if (this.email.valid && this.textArea.valid) {
      this.email.setValue('');
      this.textArea.setValue('');
      alert('Form submitted');
    } else {
      alert('Form not submitted');
    }
  }

}
