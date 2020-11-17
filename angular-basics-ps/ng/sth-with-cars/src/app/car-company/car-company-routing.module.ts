import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarCompanyListComponent} from "./car-company-list/car-company-list.component";

const routes: Routes = [
  { path: '', component: CarCompanyListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarCompanyRoutingModule { }
