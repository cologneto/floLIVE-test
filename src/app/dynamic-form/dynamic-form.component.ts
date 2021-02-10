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
  dynamicForm: FormGroup;
  passControl: FormControl;
  isSent: boolean;
  isUrgent: boolean;
  passwords: string[] = ['321123', '321456', '321789'];
  filteredPasswords: Observable<string[]>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({

    });

    this.passControl = new FormControl();

    this.filteredPasswords = this.passControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.passwords.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSendChange(e) {
    if (e.value === 'sent') {
      this.isSent = true;
    } else {
      this.isSent = false;
    }
  }

  onUrgentChange(e) {
    if (e.value === 'urgent') {
      this.isUrgent = true;
    } else {
      this.isUrgent = false;
    }
  }
}
