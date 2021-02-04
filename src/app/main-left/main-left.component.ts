import {Component, Input, OnInit} from '@angular/core';
import Todo from '../models/todo.model';

@Component({
  selector: 'app-main-left',
  templateUrl: './main-left.component.html',
  styleUrls: ['./main-left.component.css']
})
export class MainLeftComponent implements OnInit {

  constructor() { }

  @Input() todos: Array<Todo>;
  ngOnInit(): void {
  }

}
