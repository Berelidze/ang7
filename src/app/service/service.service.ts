import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getData() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getAllData(): Observable<Food[]> {
    return this.http.get<Food[]>('https://restaurant.stepprojects.ge/api/Products/GetAll');
  }

  getById(id: number): Observable<Food> {
    return this.http.get<Food>(`https://restaurant.stepprojects.ge/api/Products/GetById/${id}`);
  }
  getFoodType(): Observable<Food[]> {
    return this.http.get<Food[]>('https://restaurant.stepprojects.ge/api/Categories/GetAll');
  }
}

