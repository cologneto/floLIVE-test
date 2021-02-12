import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-reuse',
  templateUrl: './button-reuse.component.html',
  styleUrls: ['./button-reuse.component.css']
})
export class ButtonReuseComponent implements OnInit {
  @Input() size: string;
  @Input() label: string;
  @Output() click: EventEmitter<string> = new EventEmitter();

  // tslint:disable-next-line:typedef
  onClickButton()  {
    this.click.emit(this.size);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
