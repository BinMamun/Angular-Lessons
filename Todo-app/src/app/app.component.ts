import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todoModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo List';

  todoList: Todo[] = [];

  todo: Todo = {
    id: null,
    title: ""
  }

  addTodo(): void {

    if (this.todo.id) {

      this.todoList = this.todoList.map(item => {
        if (item.id === this.todo.id) {
          item.title = this.todo.title;
        }
        return item;
      })
    } else {
      this.todo.id = Date.now();
      this.todoList.push({ ...this.todo });
    }
    this.todo = {
      id: null,
      title: ""
    }
    console.log(this.todoList);
  }

  editTodo(item: Todo): void {
    this.todo = { ...item };
  }

  deleteTodo(id: any): void {
    this.todoList = this.todoList.filter(item => item.id != id);
  }
}
