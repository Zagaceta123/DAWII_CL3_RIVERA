import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  todos: any[] = [];
  constructor(private todosService: TodosService) { }
  ngOnInit(): void {
    this.todosService.getFilteredTodos().subscribe(
      (data: any[]) => {
        this.todos = data;
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }

}
