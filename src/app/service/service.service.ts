import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  getData() {
    return this.http.get('https://restaurant.stepprojects.ge/api/Products/GetAll');
  }
  getbyId(url : string ,id : number) {
    return this.http.get(`${url}/${id}`);
  }
}
