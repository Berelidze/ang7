import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Food } from '../models/food';
import { Basket } from './basket.service';

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
    return this.http.get<Food[]>(`https://restaurant.stepprojects.ge/api/Products/GetAll`)
      .pipe(
        map((products: Food[]) => products.find(p => p.id === id)!)
      );
  }
  
  getFoodType(): Observable<Food[]> {
    return this.http.get<Food[]>('https://restaurant.stepprojects.ge/api/Categories/GetAll');
  }
  getBasket(): Observable<Basket[]> {
    return this.http.get<Basket[]>('https://restaurant.stepprojects.ge/api/Baskets/GetAll');
  }
  
}

