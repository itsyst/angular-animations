import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todo.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface TodosItem {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  animations: [
    // Animation for the fade-in effect
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),

      transition(':enter, :leave', [
        animate('.3s ease-in')]),
    ]),
  ],
})
export class TodosComponent {
  constructor (private todoService: TodoService) { }

  get items(): Array<TodosItem> {
    return this.todoService.getTodos();
  }

  addItem(input: HTMLInputElement) {
    this.todoService.addTodo(input.value);
    input.value = '';
  }

  removeItem(item: TodosItem) {
    this.todoService.removeTodo(item);
  }
}
