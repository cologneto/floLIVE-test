import Todo from './todo.model';

export default class Customer {
  public firstName: string;
  public lastName: string;
  public todoList: Array<Todo>;
  public suggestions: Array<string>;
  public phoneNumber: string;
  public mail: string;

  constructor(firstName: string, lastName: string, todoList: Array<Todo>, suggestions: Array<string>, phoneNumber: string, mail: string) {
    this.firstName   = firstName;
    this.lastName    = lastName;
    this.todoList    = todoList;
    this.suggestions = suggestions;
    this.phoneNumber = phoneNumber;
    this.mail        = mail;
  }
}
