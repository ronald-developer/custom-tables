import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const PagesRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
];



