import type { PageMetadata } from "../../shared/interfaces";

export interface TodoResponse extends Todo, PageMetadata {
    todos: Todo[];
};

export interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
};
export type TodoFilter = 'all' | 'pending' | 'completed';
export type TodoState =  {
    todos: Todo[],
    selectedTodo: Todo | null;
    filter: TodoFilter
};
export interface addTodoModel {
    title: string;
}