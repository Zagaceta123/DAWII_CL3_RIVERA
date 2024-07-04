import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}



@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  getFilteredTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl).pipe(
      map(todos => todos.filter(todo => todo.id >= 25 && todo.id <= 90 && todo.completed))
    );
  }
}
