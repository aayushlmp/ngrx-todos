import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodoForm } from "./todos/components/add-todo-form/add-todo-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('App | Todos');
}
