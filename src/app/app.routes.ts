import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./home/home.component').then(x=>x.HomeComponent)
    },
    {
        path:'Members',
        loadComponent:()=>import('./members/members.component').then(x=>x.MembersComponent)
    }
];
