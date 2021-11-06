import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../core/model/todo.model'

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  todoForm: FormGroup;
  todolist: Todo[];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    if (JSON.parse(localStorage.getItem('ToDoList'))) {
      this.todolist = JSON.parse(localStorage.getItem('ToDoList'));
      console.log(this.todolist);

    } else {
      this.todolist = [];
    }

    this.onFormGroupInit();
  }

  onFormGroupInit() {
    this.todoForm = this.fb.group({
      todo_title: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  addTodo() {
    if (!this.todoForm.valid) return;

    const sendData = {
      todo_title: this.todoForm.get('todo_title').value,
      todo_finished: false,
    }

    this.todolist.push(sendData);
    localStorage.setItem('ToDoList', JSON.stringify(this.todolist));

    this.todoForm.reset();
  }

}
