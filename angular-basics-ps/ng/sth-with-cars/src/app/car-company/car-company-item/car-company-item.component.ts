import {Component, Input, OnInit} from '@angular/core';
import {CarCompany} from "../car-company";

@Component({
  selector: 'app-car-company-item',
  templateUrl: './car-company-item.component.html',
  styleUrls: ['./car-company-item.component.scss']
})
export class CarCompanyItemComponent implements OnInit {
  @Input() carCompany: CarCompany;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(companyName: string) {
    alert(`Someone want to buy a ${companyName}`)
  }
}
