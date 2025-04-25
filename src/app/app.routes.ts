import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    {path : "main", component : MainComponent, title : "Main" },
    {path : "detail/:id", component : DetailComponent, title : "Detail" },
    {path : "**", component: ErrorComponent, title : "Error" }
];
