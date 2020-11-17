import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarCompany} from "./car-company";

@Injectable({
  providedIn: 'root'
})
export class CarClientService {

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<CarCompany[]> {
    return this.httpClient.get<CarCompany[]>('api/car-companies');
  }
}
