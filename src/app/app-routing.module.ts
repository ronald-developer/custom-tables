import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutes } from './pages/pages-routing.module';


@NgModule({
  imports: [RouterModule.forRoot(PagesRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
