import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component'
import { TodoFormComponent } from './main-view/todo-form/todo-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainViewComponent,
    TodoFormComponent
  ]
})
export class PageModule { }
