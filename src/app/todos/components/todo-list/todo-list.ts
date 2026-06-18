import { Component, computed, inject} from '@angular/core';
import { TodoService } from '../../services/todo.service';
import type { Todo, TodoFilter } from '../../interfaces';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  #todoService = inject(TodoService)
  todos = computed(() => this.#todoService.getFilteredTodos());
  filterKey = computed(() => this.#todoService.getFilterKey())
  toggleTodoStatus = (id: number) => {
    this.#todoService.toggleTodoStatus(id);
  }
  editTodo(todo: Todo) {
    this.#todoService.setSelectedTodo(todo);
  }
  removeTodo(id: number) {
    if(!id) return;

    const confirmed = confirm('Are yo sure want to delete?');
    if(confirmed) {
      this.#todoService.removeTodo(id);
    }
  }
  setTodoFilterKey(key: TodoFilter = 'all') {
    this.#todoService.updateTodoFilterKey(key)
  }
}
