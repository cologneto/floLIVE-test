import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  options: FormGroup;
  toggleFormFields: new FormControl('auto');

  // @ts-ignore
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      toggleForm: this.toggleFormFields
    });
  }
}
