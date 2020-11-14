import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';



@NgModule({
  declarations: [CarListComponent, CarDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class CarCompanyModule { }
