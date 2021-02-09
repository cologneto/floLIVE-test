import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-right',
  templateUrl: './main-right.component.html',
  styleUrls: ['./main-right.component.css']
})
export class MainRightComponent implements OnInit {

  constructor() { }
  @Input() suggestions: Array<string>;
  ngOnInit(): void {
  }
}
