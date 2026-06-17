import { computed, inject, Service } from '@angular/core';
import { TodoStore } from '../stores/todo.store';
import id from '@angular/common/locales/id';
import type { Todo, TodoFilter } from '../interfaces';

@Service()
export class TodoService {
  #store = inject(TodoStore);
  todosCount() {
    return this.#store.todos().length ?? 0;
  }
  getCompletedTodos() {
    return this.#store.completedTodos() ?? [];
  }
  getTodos() {
    return this.#store.todos() ?? [];
  }
   getFilteredTodos() {
    return this.#store.filterTodos() ?? [];
  }
  getSelectedTodo() {
    return this.#store.selectedTodo() ?? null;
  }
  addNewTodo(title: string) {
    const newTodo = {
        id: Date.now(),
        title,
        completed: false,
        userId: 1,

    }
    this.#store.addNewTodo(newTodo);
  }
  updateTodo(id: number, title: string) {
    this.#store.updateTodo(id, title);
  }
  removeTodo(id: number) {
    this.#store.removeTodo(id);
  }
  toggleTodoStatus(id: number) {
    this.#store.toggleTodoStatus(id);
  }
  setSelectedTodo(todo: Todo | null) {
    this.#store.setSelectedTodo(todo);
  }
  updateTodoFilterKey(key: TodoFilter = 'all') {
    this.#store.setFilterKey(key);
  }
}
