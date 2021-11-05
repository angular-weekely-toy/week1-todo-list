import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './shared/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  //* C
  addTodo(text: string) {
    const body = { text };
    return this.http.post<Todo[]>(`${this.baseUrl}/todo`, body);
  }

  //* R
  getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/todo/${id}`);
  }

  //* P
  updateTodo(todo: Todo) {
    return this.http.patch<Todo[]>(`${this.baseUrl}/todo/${todo.id}`, todo);
  }

  //* D
  removeTodo(id: number) {
    return this.http.delete<Todo[]>(`${this.baseUrl}/todo/${id}`);
  }
}
