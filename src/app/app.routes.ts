import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    {path : "main", component : MainComponent, title : "Main" },
    {path : "detail/:id", component : DetailComponent, title : "Detail" },
];
