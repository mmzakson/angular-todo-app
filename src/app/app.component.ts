import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public todos = [];

  constructor(private _todosService: TodosService) {}
  ngOnInit() {
    this._todosService.getTodos().subscribe((data) => (this.todos = data));
  }

  deleteTodo(todoId) {
    this._todosService.deleteTodo(todoId).subscribe(() => {
      console.log(todoId);
    });
  }
}
