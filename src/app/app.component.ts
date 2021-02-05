import { Component, OnInit } from '@angular/core';
import Customer from './models/customer.model';
import Todo from './models/todo.model';
import Account from './models/account.model';
import Transaction from './models/transaction.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'flo-live-test';

  customer: Customer;
  account: Account;

  ngOnInit(){
    const todos = [
      new Todo('Do breakfast', false),
      new Todo('Do jogging', false),
      new Todo('Work', false)
    ];
    const suggestions = [
      '../assets/images/1-bhutuan-pine-520x340.jpg',
      '../assets/images/download.jpg',
      '../assets/images/image2s.jpg',
      '../assets/images/InstHunt-nature-Collater.al_-520x340.jpg',
      '../assets/images/Marche-Celeste-la-foresta-illuminata-di-Alexis-Pichot-Collater.al-5-520x340.jpg',
      '../assets/images/ORIGIN-Tree-House-la-bellissima-casa-sull’albero-di-Atelier-Levit-Collater.al-2-520x340.jpg',
      '../assets/images/Path-bedides-a-grove-520x340.jpg',
      '../assets/images/road-1072823__340.jpg',
      '../assets/images/Single-rock-in-bohemian-paradise-e1504115309951-520x340.jpg',
      '../assets/images/Small-railway-in-Gruga-Park-in-Essen-520x340.jpg',
      '../assets/images/Vermont-520x340.jpg',
      '../assets/images/View-through-the-trees-onto-lake-near-Goslar-520x340.jpg'
    ];
    const transactionHistory = [
      new Transaction('EUR', 45.56, '09-21-2009'),
      new Transaction('EUR', 45.56, '09-21-2009'),
      new Transaction('EUR', 45.56, '09-21-2009'),
      new Transaction('EUR', 45.56, '09-21-2009')
    ];

    this.account = new Account(123456, '../assets/images/mgidarccontentnick.comc008fa9d_d.0.jpg', transactionHistory);
    this.customer = new Customer('Georgi', 'Tsanev', todos, suggestions,'+09841203948', 'cologneto@abv.bg');
  }
}
