import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals"
import type { Todo, TodoFilter, TodoState } from "../interfaces";
import { computed, effect } from "@angular/core";
import { filter } from "rxjs";

const initialTodoState: TodoState = {
    todos: [],
    filter: 'all',
    selectedTodo: null
}
const localStorageKey = 'my-todos'
export const TodoStore = signalStore(
    {providedIn: 'root'},
    withState(initialTodoState),
    withComputed(({todos, filter}) => ({
        completedTodos: computed(() => todos().filter((todo) => todo.completed)),
        filterTodos: computed(() => (todos().filter((todo) => (filter() === 'completed' ? todo.completed : filter() === 'pending' ? !todo.completed : todo))))
    })),
    withMethods((store) => ({
        addNewTodo: (newTodo: Todo) => {
            patchState(store, ({todos}) => ({
                todos: [newTodo, ...todos]
            }))
        },
        updateTodo: (id: number, title: string) => {
            patchState(store, ({todos}) => ({
                todos: todos.map((todo: Todo) => (todo.id === id ? {...todo, title} : todo))
            }))
        },
        removeTodo: (id: number) => {
            patchState(store, ({todos}) => ({
                todos: todos.filter((todo: Todo) => todo.id !== id)
            }))
        },
        toggleTodoStatus: (id: number) => {
            patchState(store, ({todos}) => ({
                todos: todos.map((todo: Todo) => (todo.id === id ? {...todo, ...{completed: !todo.completed}} : todo))
            }))
        },
        setSelectedTodo:  (todo: Todo | null) => {
            patchState(store, {
                selectedTodo: todo ? {...todo} : null
            })
        },
        setFilterKey:  (key: TodoFilter = 'all') => {
            patchState(store, {
                filter: key ?? 'all'
            })
        }
    })),
    withHooks({
        onInit(store) {
            const localStorageTodos = JSON.parse(localStorage.getItem(localStorageKey) ?? '[]')
            patchState(store, {
                todos: localStorageTodos
            });
            effect(() => {
                const state = getState(store);
                localStorage.setItem(localStorageKey, JSON.stringify(state.todos))
            })
        }
    })
)