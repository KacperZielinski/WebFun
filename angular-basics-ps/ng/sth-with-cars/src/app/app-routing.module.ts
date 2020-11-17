import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarCompanyListComponent} from "./car-company/car-company-list/car-company-list.component";
import {CarListComponent} from "./car-company/car-list/car-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'car-company', component: CarCompanyListComponent },
  { path: '', redirectTo: 'car-company', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
