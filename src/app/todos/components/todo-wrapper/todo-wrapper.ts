import { Component, computed, inject } from '@angular/core';
import { AddTodoForm } from "../add-todo-form/add-todo-form";
import { TodoList } from "../todo-list/todo-list";
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-wrapper',
  imports: [AddTodoForm, TodoList],
  templateUrl: './todo-wrapper.html',
  styleUrl: './todo-wrapper.css',
})
export class TodoWrapper {
  #todoService = inject(TodoService);
  completedTodos= computed(() => this.#todoService.getCompletedTodos());
  todos = computed(() => this.#todoService.getTodos());
  selectedTodo = computed(() => this.#todoService.getSelectedTodo());
}
