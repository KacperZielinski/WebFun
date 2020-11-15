import { Component, OnInit } from '@angular/core';
import {CarCompany} from "../car-company";

@Component({
  selector: 'app-car-company-list',
  templateUrl: './car-company-list.component.html',
  styleUrls: ['./car-company-list.component.scss']
})
export class CarCompanyListComponent implements OnInit {

  carCompanies: CarCompany[] = [
    {
      name: 'Peugeot',
      desc: 'Francja, Sochaux, 1810',
      logoUrl: 'https://www.carlogos.org/car-logos/peugeot-logo.png'
    },
    {
      name: 'Citroen',
      logoUrl: 'https://www.carlogos.org/car-logos/citroen-logo.png'
    },
    {
      name: 'BMW',
      logoUrl: 'https://www.carlogos.org/car-logos/bmw-logo.png'
    },
    {
      name: 'Honda',
      logoUrl: 'https://www.carlogos.org/car-logos/honda-logo.png'
    },
    {
      name: 'Saab',
      logoUrl: 'https://www.carlogos.org/car-logos/saab-logo.png',
      notExists: true
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }


}
