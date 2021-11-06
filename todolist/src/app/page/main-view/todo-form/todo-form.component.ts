import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
    console.log(this.todo);
  }

  deleteTodo() {

  }
  
  editTodo() {

  }

  test(){
    console.log(this.todo);
  }
}
