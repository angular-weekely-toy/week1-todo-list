import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../shared/todo';
import { TodoService } from '../todo.service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList$!: Observable<Todo[]>;
  text: string = '';
  date = new Date();
  conditions$!: Observable<string>;

  constructor(
    private todoService: TodoService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.todoList$ = this.todoService.getAllTodo();
    this.conditions$ = this.weatherService.getCurrentConditions();
  }

  handleRemove(id: number) {
    this.todoList$ = this.todoService.removeTodo(id);
  }

  handleUpdate(todo: Todo) {
    this.todoList$ = this.todoService.updateTodo(todo);
  }

  submit() {
    this.todoList$ = this.todoService.addTodo(this.text);
    this.text = '';
  }
}
