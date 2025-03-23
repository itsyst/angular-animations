import { Injectable } from '@angular/core';
import { TodosItem } from '../todos/todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Array<TodosItem> = [
    { id: 1, title: 'Köp mjölk', completed: false },
    { id: 2, title: 'Städa huset', completed: true },
    { id: 3, title: 'Förbered middag', completed: false },
  ];

  getTodos(): Array<TodosItem> {
    return this.todos;
  }

  addTodo(title: string): void {
    if (title.trim()) {
      this.todos.unshift({
        id: this.todos.length + 1,
        title: title.trim(),
        completed: false,
      });
    }
  }

  removeTodo(item: TodosItem): void {
    this.todos = this.todos.filter((todo) => todo !== item);
  }
}
