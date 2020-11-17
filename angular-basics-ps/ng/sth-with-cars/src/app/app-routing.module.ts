import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: 'car-company', loadChildren: () => import('./car-company/car-company.module').then(m => m.CarCompanyModule) },
  { path: '', redirectTo: 'car-company', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
