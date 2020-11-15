import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarCompanyItemComponent } from './car-company-item/car-company-item.component';
import { CarCompanyListComponent } from './car-company-list/car-company-list.component';



@NgModule({
  declarations: [CarListComponent, CarDetailsComponent, CarCompanyItemComponent, CarCompanyListComponent],
  exports: [
    CarCompanyListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarCompanyModule { }
