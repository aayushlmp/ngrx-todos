import type { Route } from "@angular/router";

export const todoRoutes: Route[] = [
    {
        path: '',
        redirectTo:'',
        pathMatch: 'full',
    },
    {
        path:'',
        loadComponent: () => import('../../todos/components/todo-wrapper/todo-wrapper').then(w => w.TodoWrapper)
    }
]