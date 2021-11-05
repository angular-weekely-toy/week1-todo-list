import { Injectable } from '@nestjs/common';
import { Todo } from './shared/todo.model';

@Injectable()
export class AppService {
  todoList: Todo[] = [
    {
      id: 0,
      text: 'todo0',
      done: false,
    },
    {
      id: 1,
      text: 'todo1',
      done: false,
    },
    {
      id: 2,
      text: 'todo2',
      done: false,
    },
  ];

  private id = 2;

  getHello(): string {
    return 'Hello World!';
  }
  addTodo(text: string) {
    this.todoList.push({ id: this.id++, text, done: false });
    return this.todoList;
  }
  getAllTodo() {
    return this.todoList;
  }
  updateTodo(id: number, getTodo: Todo) {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? getTodo : todo,
    );
    return this.todoList;
  }
  deleteTodo(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    return this.todoList;
  }
}
