import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        loadChildren: () => import('./todos/routes/todos.routes').then(t => t.todoRoutes)
    }
];
