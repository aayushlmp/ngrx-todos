import { Component, inject, input, signal, type OnChanges, type SimpleChanges } from '@angular/core';
import { FormField, form, required, FormRoot, submit } from '@angular/forms/signals';
import type { addTodoModel, Todo } from '../../interfaces';
import { TodoService } from '../../services/todo.service';
import id from '@angular/common/locales/id';

@Component({
  selector: 'app-add-todo-form',
  imports: [FormField, FormRoot],
  templateUrl: './add-todo-form.html',
  styleUrl: './add-todo-form.css',
})
export class AddTodoForm implements OnChanges{
  #todoService = inject(TodoService);
  selectedTodo = input<Todo | null>(null);
  addTodoModel = signal<addTodoModel>({
    title: this.selectedTodo()?.title ?? ''
  });
  addTodoForm = form(this.addTodoModel, (schemaPath) => {
    required(schemaPath.title, {message: 'This is required field'})
  });
  ngOnChanges(): void {
    this.addTodoModel.set({title: (this.selectedTodo()?.title || '')})
  }
  submitNewTodo() {
    submit(this.addTodoForm, async (field) => {
      if(field().invalid()) return;
      this.submitTodo(field().value().title);
    });
  }
  submitTodo(newTitle: string) {
    if(this.selectedTodo()?.id) {
      this.update(newTitle);
    } else {
      this.save(newTitle);
    }
  }
  save(newTitle: string) {
    this.#todoService.addNewTodo(newTitle);
  }
  update(newTitle: string) {
    const todo = this.selectedTodo();
    if(!todo?.id) return;
    const {id} = todo;
    this.#todoService.updateTodo(id, newTitle);
  }
}
