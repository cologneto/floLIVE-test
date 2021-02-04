import { Component, OnInit } from '@angular/core';
import Customer from './models/customer.model';
import Todo from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'flo-live-test';

  customer: Customer;
  todos: Array<Todo>;
  suggestions: Array<string>;

  ngOnInit(){
    this.todos = [
      new Todo('Do breakfast', false),
      new Todo('Do jogging', false),
      new Todo('Work', false)
    ];
    this.suggestions = [
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
    this.customer = new Customer('Georgi', 'Tsanev', this.todos, this.suggestions,'+09841203948', 'cologneto@abv.bg');
  }
}
