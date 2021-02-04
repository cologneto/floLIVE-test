export default class Todo {
  public text: string;
  public isDone: boolean;

  constructor(text: string, isDone: boolean) {
    this.text = text;
    this.isDone = isDone;
  }
}
