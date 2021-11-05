import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cloneDeep } from 'lodash-es';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Todo } from '../shared/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  todoChecked!: FormControl;
  todoInput!: FormControl;

  form!: FormGroup;

  constructor(private todoService: TodoService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.todoChecked = new FormControl(this.todo.done);
    this.todoInput = new FormControl(this.todo.text);
    this.form = this.fb.group({
      todoChecked: this.todoChecked,
      todoInput: this.todoInput,
    });
  }

  submit() {
    const todo: Todo = {
      id: this.todo.id,
      done: !!this.form.value.todoChecked,
      text: this.form.value.todoInput,
    };
    this.todoService.updateTodo(todo).subscribe((res) => {
      console.log(res);
    });
  }

  handleRemove() {
    const { id } = this.todo;
    this.remove.emit(id);
  }

  changeDone() {
    const todo: Todo = {
      id: this.todo.id,
      text: this.form.value.todoInput,
      done: this.form.value.todoChecked,
    };
    this.update.emit(todo);
  }
}
