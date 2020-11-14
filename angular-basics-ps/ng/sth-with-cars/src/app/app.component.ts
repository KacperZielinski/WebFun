import { Component } from '@angular/core';

interface CarCompany {
  name: string;
  desc?: string;
  logoUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
      name: 'Ford',
      logoUrl: 'https://www.carlogos.org/car-logos/ford-logo.png'
    },

  ]
}
