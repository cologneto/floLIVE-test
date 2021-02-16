import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{
  dynamicFormIsSent: FormGroup;
  dynamicFormNotSent: FormGroup;
  fileUpload: FormControl;
  passControl: FormControl;
  isSent: boolean;
  isUrgent: boolean;
  passwords: string[] = ['321123', '321456', '321789'];
  filteredPasswords: Observable<string[]>;

  private dateValidators = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicFormIsSent = this.formBuilder.group({
      fileUpload: [
        undefined,
        [Validators.required]
      ],
      dateInputIsSent: [
        undefined,
        [Validators.required]
      ],
      commentInputIsSent: ['']
    });

    this.dynamicFormNotSent = this.formBuilder.group({
      passwordInput: [
        undefined,
        [Validators.required]
      ],
      dateInputNotSent: [
        undefined,
        this.dateValidators
      ],
      urgentRadio: [
        undefined,
        [Validators.required]
      ]
    });
    this.passControl = new FormControl();

    this.filteredPasswords = this.passControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.dynamicFormNotSent.get('urgentRadio').valueChanges
      .subscribe(value => {
        if ( value === 'urgent' ) {
          this.dynamicFormNotSent.get('dateInputNotSent').setValidators([Validators.required]);
        } else {
          this.dynamicFormNotSent.get('dateInputNotSent').setValidators([]);
        }
      });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.passwords.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSendChange(e): void {
    if (e.value === 'sent') {
      this.isSent = true;
    } else {
      this.isSent = false;
    }
  }

  onSubmitIsSent(): void {
    if (this.dynamicFormIsSent.valid) {
      alert('form sent submitted');
    } else {
      alert('Form sent not submitted');
    }
  }

  onSubmitNotSent(): void {
    if (this.dynamicFormNotSent.valid) {
      alert('form not sent submitted');
    } else {
      alert('Form "not sent" not submitted');
    }
  }

  onUrgentChange(e): void {
    console.log(e);
    if (e.value === 'urgent') {
      this.isUrgent = true;
    } else {
      this.isUrgent = false;
    }
  }
}
