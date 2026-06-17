import type { Route } from "@angular/router";

export const todoRoutes: Route[] = [
    {
        path: '',
        redirectTo:'wrapper',
        pathMatch: 'full',
    },
    {
        path:'wrapper',
        loadComponent: () => import('../../todos/components/todo-wrapper/todo-wrapper').then(w => w.TodoWrapper)
    }
]