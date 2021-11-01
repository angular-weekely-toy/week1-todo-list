import { Injectable } from '@angular/core';

import { Todo } from './shared/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private id: number = 0;
  todoList: Todo[] = [];

  constructor() {
    this.push('sample todo1');
    this.push('sample todo2');
    this.push('sample todo3');
  }

  private push(text: string) {
    this.todoList.push({
      id: this.id++,
      text,
      done: false,
    });
  }

  add(text: string) {
    this.push(text);
  }

  getTodos() {
    return this.todoList;
  }

  getTodo(id: number) {
    return this.todoList.find((todo) => todo.id === id);
  }

  remove(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }

  update(id: number, text: string) {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, text } : todo
    );
  }
}
