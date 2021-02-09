import {Component, Input, OnInit} from '@angular/core';
import Todo from '../models/todo.model';
import Transaction from '../models/transaction.model';

@Component({
  selector: 'app-main-left',
  templateUrl: './main-left.component.html',
  styleUrls: ['./main-left.component.css']
})
export class MainLeftComponent implements OnInit {
  displayedColumns: string[] = ['currency', 'amount', 'date'];

  constructor() { }

  @Input() todos: Todo[];
  @Input() transactions: Transaction[];

  ngOnInit(): void {
    console.log(this.todos);
  }

}
