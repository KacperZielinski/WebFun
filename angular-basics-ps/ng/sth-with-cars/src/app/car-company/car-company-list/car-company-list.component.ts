import { Component, OnInit } from '@angular/core';
import {CarCompany} from "../car-company";
import {Observable} from "rxjs";
import {CarClientService} from "../car-client.service";

@Component({
  selector: 'app-car-company-list',
  templateUrl: './car-company-list.component.html',
  styleUrls: ['./car-company-list.component.scss']
})
export class CarCompanyListComponent implements OnInit {

  carCompanies$: Observable<CarCompany[]>

  constructor(private carClient: CarClientService) { }

  ngOnInit(): void {
    this.carCompanies$ = this.carClient.getBooks()
  }


}

