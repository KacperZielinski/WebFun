import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarCompanyListComponent} from "./car-company/car-company-list/car-company-list.component";
import {CarListComponent} from "./car-company/car-list/car-list.component";

const routes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: '', redirectTo: 'car-company', pathMatch: 'full' },
  { path: '**', component: CarCompanyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
