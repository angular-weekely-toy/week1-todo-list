export class Todo {
  done: boolean;
  text: string;
  id: number;

  constructor(done: boolean, text: string, id: number) {
    this.done = done;
    this.text = text;
    this.id = id;
  }
}
