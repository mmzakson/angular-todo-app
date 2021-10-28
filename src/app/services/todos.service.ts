import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private _url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._url);
  }

  deleteTodo(todoId) {
    const deleteEndPoint = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    return this.http.delete(deleteEndPoint);
  }
}
