import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-reuse',
  templateUrl: './button-reuse.component.html',
  styleUrls: ['./button-reuse.component.css']
})
export class ButtonReuseComponent {
  @Input() size: string;
  @Input() label: string;
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  onClickButton(): void  {
    this.clicked.emit(this.size);
  }
  constructor() { }
}
